<?php

namespace App\Http\Controllers;

use App\Factor;
use Carbon\Carbon;
use Auth;
use Illuminate\Http\Request;

class FactorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        $factor = Factor::get();

        if( count( $factor ) > 0 ) {
            return response( [ 'msg' => "Listando", 'value' => true, "data" => $factor ], 200 );
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

        Factor::create( $request->all() );

        return response( [ 'msg' => "Registrado", 'value' => true, "data" => null ], 200 );

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Factor  $factor
     * @return \Illuminate\Http\Response
     */
    public function show( $id )
    {
        
        $factor = Factor::findOrFail( $id );

        if( !is_null( $factor ) ) {
            return response( [ 'msg' => "Existe Registro", 'value' => true, "data" => $factor ], 200 );
        }

        return response( [ 'msg' => "No hay registros", 'value' => false, "data" => null ], 200 );

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Factor  $factor
     * @return \Illuminate\Http\Response
     */
    public function edit(Factor $factor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Factor  $factor
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        
        $factor = Factor::findOrFail( $id )->update( $request->all() );

        if( $factor ) {
            return response( [ 'msg' => "Editado", 'value' => true, "data" => null ], 200 );
        }

        return response( [ 'msg' => "No se pudo editar", 'value' => false, "data" => null ], 200 );

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Factor  $factor
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id )
    {
        
        Factor::findOrFail( $id )->update( 
            [
                'status' => 0
            ]
        );
        
        return response( [ 'msg' => "Desactivado", 'value' => true, "data" => null ], 200 );

    }

    public function activeDesactive( Request $request )
    {

        Factor::findOrFail( $request->id )->update( 
            [
                'status' => $request->status
            ]
        );
        
        return response( [ 'msg' => $request->status ? "Activado" : "Desactivado", 'value' => true, "data" => null ], 200 );

    }

    public function search( Request $request )
    {
        
        $factor = Factor::where('name', 'LIKE', '%'.$request->name)->get();

        if( count( $factor ) > 0 ) {
            return response( [ 'msg' => "Listando", 'value' => true, "data" => $factor ], 200 );
        }

        return response( [ 'msg' => "No hay registros", 'value' => false, "data" => null ], 200 );

    }

    public function withFile()
    {
        
        $factor = Factor::with( WithUtils::categoryStandar() )->get();

        if( count( $factor ) > 0 ) {
            return response( [ 'msg' => "Listando", 'value' => true, "data" => $factor ], 200 );
        }

        return response( [ 'msg' => "No hay registros", 'value' => false, "data" => null ], 200 );

    }

}
