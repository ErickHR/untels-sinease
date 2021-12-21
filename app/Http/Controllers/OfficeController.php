<?php

namespace App\Http\Controllers;

use App\Office;
use App\Utils\WithUtils;
use Carbon\Carbon;
use Auth;
use Illuminate\Http\Request;

class OfficeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        $office = Office::get();

        if( count( $office ) > 0 ) {
            return response( [ 'msg' => "Listando", 'value' => true, "data" => $office ], 200 );
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
                // 'user_id' => Auth::id(),
            ] 
        );

        $office = Office::create( $request->all() );

        $office->standar()->attach( $request->standars, [
            'user_id' => Auth::id(),
            'datetime_register' => Carbon::now()
        ] );

        return response( [ 'msg' => "Registrado", 'value' => true, "data" => null ], 200 );

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Office  $office
     * @return \Illuminate\Http\Response
     */
    public function show( $id )
    {
        
        $office = Office::findOrFail( $id );

        if( !is_null( $office ) ) {
            return response( [ 'msg' => "Existe Registro", 'value' => true, "data" => $office ], 200 );
        }

        return response( [ 'msg' => "No hay registros", 'value' => false, "data" => null ], 200 );

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Office  $office
     * @return \Illuminate\Http\Response
     */
    public function edit(Office $office)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Office  $office
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id )
    {
        
        $office = Office::findOrFail( $id )->update( $request->all() );

        if( $office ) {
            return response( [ 'msg' => "Editado", 'value' => true, "data" => null ], 200 );
        }

        return response( [ 'msg' => "No se pudo editar", 'value' => false, "data" => null ], 200 );

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Office  $office
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id )
    {
        
        Office::findOrFail( $id )->update( 
            [
                'status' => 0
            ]
        );
        
        return response( [ 'msg' => "Desactivado", 'value' => true, "data" => null ], 200 );

    }

    public function activeDesactive( Request $request )
    {

        Office::findOrFail( $request->id )->update( 
            [
                'status' => $request->status
            ]
        );
        
        return response( [ 'msg' => $request->status ? "Activado" : "Desactivado", 'value' => true, "data" => null ], 200 );

    }

    public function search( Request $request )
    {
        
        $office = Office::where('name', 'LIKE', '%'.$request->name)->get();

        if( count( $office ) > 0 ) {
            return response( [ 'msg' => "Listando", 'value' => true, "data" => $office ], 200 );
        }

        return response( [ 'msg' => "No hay registros", 'value' => false, "data" => null ], 200 );

    }

    public function withStandar()
    {
        
        $office = Office::with( WithUtils::office() )->get();

        if( count( $office ) > 0 ) {
            return response( [ 'msg' => "Listando", 'value' => true, "data" => $office ], 200 );
        }

        return response( [ 'msg' => "No hay registros", 'value' => false, "data" => null ], 200 );

    }

}
