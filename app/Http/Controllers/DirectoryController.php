<?php

namespace App\Http\Controllers;

use App\Directory;
use Carbon\Carbon;
use App\Utils\WithUtils;
use Auth;
use Illuminate\Http\Request;

class DirectoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $directoryList= Directory::with(WithUtils::directory())->where( 'user_id', '=', Auth::id() )->get();
        // return $directoryList;
        $directoryListNew = [];

        foreach( $directoryList as $directory ) {
            
            if( count( $directory->files ) != 0 ) {

                $directoryListNew[] = $directory;

            }

        }

        if( count( $directoryListNew ) > 0 ) {
            return response( [ 'msg' => "Listando", 'value' => true, "data" => $directoryListNew ], 200 );
        }

        return response( [ 'msg' => "No hay registros", 'value' => false, "data" => null ], 200 );

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        $request->merge( 
            [
                'datetime_register' => Carbon::now(),
                'user_id' => Auth::id(),
            ] 
        );

        Directory::create( $request->all() );

        return response( [ 'msg' => "Registrado", 'value' => true, "data" => null ], 200 );

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Directory  $directory
     * @return \Illuminate\Http\Response
     */
    public function show( $id )
    {

        $directory = Directory::findOrFail( $id );

        if( !is_null( $directory ) ) {
            return response( [ 'msg' => "Existe Registro", 'value' => true, "data" => $directory ], 200 );
        }

        return response( [ 'msg' => "No hay registros", 'value' => false, "data" => null ], 200 );

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Directory  $directory
     * @return \Illuminate\Http\Response
     */
    public function edit(Directory $directory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Directory  $directory
     * @return \Illuminate\Http\Response
     */
    public function update( Request $request, $id )
    {
        
        $directory = Directory::findOrFail( $id )->update( $request->all() );

        if( $directory ) {
            return response( [ 'msg' => "Editado", 'value' => true, "data" => null ], 200 );
        }

        return response( [ 'msg' => "No se pudo editar", 'value' => false, "data" => null ], 200 );

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Directory  $directory
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id )
    {
        
        Directory::findOrFail( $id )->update( 
            [
                'status' => 0
            ]
        );
        
        return response( [ 'msg' => "Desactivado", 'value' => true, "data" => null ], 200 );

    }

    public function mine()
    {
        
        $directory = Directory::where( 'user_id', '=', Auth::id() )->get();

        if( count( $directory ) > 0 ) {
            return response( [ 'msg' => "Listando", 'value' => true, "data" => $directory ], 200 );
        }

        return response( [ 'msg' => "No hay registros", 'value' => false, "data" => null ], 200 );

    }

}
