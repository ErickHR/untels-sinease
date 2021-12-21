<?php

namespace App\Http\Controllers;

use App\Dimension;
use Carbon\Carbon;
use App\Utils\WithUtils;
use Auth;
use Illuminate\Http\Request;

class DimensionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        $dimension = Dimension::get();

        if( count( $dimension ) > 0 ) {
            return response( [ 'msg' => "Listando", 'value' => true, "data" => $dimension ], 200 );
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

        Dimension::create( $request->all() );

        return response( [ 'msg' => "Registrado", 'value' => true, "data" => null ], 200 );

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Dimension  $dimension
     * @return \Illuminate\Http\Response
     */
    public function show( $id )
    {
        
        $dimension = Dimension::findOrFail( $id );

        if( !is_null( $dimension ) ) {
            return response( [ 'msg' => "Existe Registro", 'value' => true, "data" => $dimension ], 200 );
        }

        return response( [ 'msg' => "No hay registros", 'value' => false, "data" => null ], 200 );

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Dimension  $dimension
     * @return \Illuminate\Http\Response
     */
    public function edit(Dimension $dimension)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Dimension  $dimension
     * @return \Illuminate\Http\Response
     */
    public function update( Request $request, $id )
    {
        
        $dimension = Dimension::findOrFail( $id )->update( $request->all() );

        if( $dimension ) {
            return response( [ 'msg' => "Editado", 'value' => true, "data" => null ], 200 );
        }

        return response( [ 'msg' => "No se pudo editar", 'value' => false, "data" => null ], 200 );

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Dimension  $dimension
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id )
    {
        
        Dimension::findOrFail( $id )->update( 
            [
                'status' => 0
            ]
        );
        
        return response( [ 'msg' => "Desactivado", 'value' => true, "data" => null ], 200 );

    }

    public function activeDesactive( Request $request )
    {

        Dimension::findOrFail( $request->id )->update( 
            [
                'status' => $request->status
            ]
        );
        
        return response( [ 'msg' => $request->status ? "Activado" : "Desactivado", 'value' => true, "data" => null ], 200 );

    }

    public function search( Request $request )
    {
        
        $dimension = Dimension::where('name', 'LIKE', '%'.$request->name)->get();

        if( count( $dimension ) > 0 ) {
            return response( [ 'msg' => "Listando", 'value' => true, "data" => $dimension ], 200 );
        }

        return response( [ 'msg' => "No hay registros", 'value' => false, "data" => null ], 200 );

    }

    public function withFactor()
    {
        
        $dimension = Dimension::with( WithUtils::dimension() )->get();

        if( count( $dimension ) > 0 ) {
            return response( [ 'msg' => "Listando", 'value' => true, "data" => $dimension ], 200 );
        }

        return response( [ 'msg' => "No hay registros", 'value' => false, "data" => null ], 200 );

    }

}
