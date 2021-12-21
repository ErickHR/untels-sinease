<?php

namespace App\Http\Controllers;

use App\Position;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Auth;

class PositionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $positionList = Position::get();

        if( count( $positionList ) ) {
            return response( [ 'value' => true, 'msg' => 'Listando', 'data' => $positionList ], 200 );
        }

        return response( [ 'value' => false, 'msg' => 'No hay lista', 'data' => null ], 200 );

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
                'user_id'=>Auth::id(),
                'datetime_register'=>Carbon::now(),
            ]
        );

        try {

            $standarCreate = Position::create( $request->all() );

            return response( [ 'value' => true, 'msg' => 'Registrado', 'data' => $standarCreate ], 200 );

        } catch (\Excetion $e) {
            return response( [ 'value' => false, 'msg' => 'Error al crear', 'data' => null ], 200 );
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Position  $position
     * @return \Illuminate\Http\Response
     */
    public function show( $id )
    {
        
        $position = Position::findOrFail( $id );

        if( !is_null( $position ) ) {
            return response( [ 'msg' => "Existe Registro", 'value' => true, "data" => $position ], 200 );
        }

        return response( [ 'msg' => "No hay registros", 'value' => false, "data" => null ], 200 );

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Position  $position
     * @return \Illuminate\Http\Response
     */
    public function edit(Position $position)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Position  $position
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Position $position)
    {
        
        $positionUpdate = $position->update( $request->all() );

        if( $positionUpdate ) {
            return response( [ 'value' => true, 'msg' => 'Modificado', 'data' => null ], 200 );
        }

        return response( [ 'value' => false, 'msg' => 'Error al modificar', 'data' => null ], 200 );

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Position  $position
     * @return \Illuminate\Http\Response
     */
    public function destroy(Position $position)
    {
        //
    }

    public function activeDesactive( Request $request )
    {
        Position::findOrFail( $request->id )->update( 
            [
                'status' => $request->status
            ]
        );
        
        return response( [ 'msg' => $request->status ? "Activado" : "Desactivado", 'value' => true, "data" => null ], 200 );

    }

    public function search( Request $request )
    {
        
        $position = Position::where('name', 'LIKE', '%'.$request->name)->get();

        if( count( $position ) > 0 ) {
            return response( [ 'msg' => "Listando", 'value' => true, "data" => $position ], 200 );
        }

        return response( [ 'msg' => "No hay registros", 'value' => false, "data" => null ], 200 );

    }

    public function getActive()
    {

        $positionList = Position::where( 'status', "=", true )->get();

        if( count( $positionList ) ) {
            return response( [ 'value' => true, 'msg' => 'Listando', 'data' => $positionList ], 200 );
        }

        return response( [ 'value' => false, 'msg' => 'No hay lista', 'data' => null ], 200 );

    }

}
