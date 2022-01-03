<?php

namespace App\Http\Controllers;

use App\Standar;
use App\CategoryStandar;
use App\User;

use App\Utils\WithUtils;

use Illuminate\Http\Request;
use Carbon\Carbon;
use Auth;

class StandarController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $standarList = Standar::with( WithUtils::standar() )->get();

        if( count( $standarList ) ) {
            return response( [ 'value' => true, 'msg' => 'Listando ', 'data' => $standarList ], 200 );
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
                'user_id'=>1,
                'datetime_register'=>Carbon::now(),
                'factor_id' => $request->factor_id
            ]
        );

        try {

            $standarCreate = Standar::create( $request->all() );

            return response( [ 'value' => true, 'msg' => 'Standar creado', 'data' => $standarCreate ], 200 );
        } catch (\Excetion $e) {
            return response( [ 'value' => false, 'msg' => 'Error al crear', 'data' => null ], 200 );
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Standar  $standar
     * @return \Illuminate\Http\Response
     */
    public function show( $id )
    {
        $standar = Standar::findOrFail( $id );

        if( !is_null( $standar ) ) {
            return response( [ 'msg' => "Existe Registro", 'value' => true, "data" => $standar ], 200 );
        }

        return response( [ 'msg' => "No hay registros", 'value' => false, "data" => null ], 200 );

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Standar  $standar
     * @return \Illuminate\Http\Response
     */
    public function edit(Standar $standar)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Standar  $standar
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Standar $standar)
    {

        $standarUpdate = $standar->update( $request->all() );

        if( $standarUpdate ) {
            return response( [ 'value' => true, 'msg' => 'Standar modificado', 'data' => null ], 200 );
        }

        return response( [ 'value' => false, 'msg' => 'Error al modificar', 'data' => null ], 200 );

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Standar  $standar
     * @return \Illuminate\Http\Response
     */
    public function destroy(Standar $standar)
    {

        $standarDelete = $standar->update( ['status' => 0 ] );
        
        // $standar = Standar::findOrFail( $standar->id );

        if( $standarDelete ) {
            return response( [ 'value' => true, 'msg' => 'Registro eliminado', 'data' => null ], 200 );
        }

        return response( [ 'value' => false, 'msg' => 'No se pudo eliminar', 'data' => null ], 200 );

    }

    public function activeDesactive( Request $request )
    {
        Standar::findOrFail( $request->id )->update( 
            [
                'status' => $request->status
            ]
        );
        
        return response( [ 'msg' => $request->status ? "Activado" : "Desactivado", 'value' => true, "data" => null ], 200 );

    }

    public function search( Request $request )
    {
        
        $standar = Standar::with( WithUtils::standar() )->where('name', 'LIKE', '%'.$request->name.'%');

        if( !is_null( $request->idCategory ) ) {
            $standar = $standar->where('category_standar_id', '=', $request->idCategory);
        }

            
        $standar = $standar->get();

        if( count( $standar ) > 0 ) {
            return response( [ 'msg' => "Listando", 'value' => true, "data" => $standar ], 200 );
        }

        return response( [ 'msg' => "No hay registros", 'value' => false, "data" => null ], 200 );

    }

    public function byOffice()
    {


        $user = User::with( WithUtils::userAll() )->findOrFail( Auth::id() );
        
        $standar = $user->person->position->office->standar;
        // return $standar;
        // $standarList = Standar::with( WithUtils::standarByOffice() )->get();

        if( count( $standar ) ) {
            return response( [ 'value' => true, 'msg' => 'Listando', 'data' => $standar ], 200 );
        }

        return response( [ 'value' => false, 'msg' => 'No hay lista', 'data' => null ], 200 );

    }

    public function getByFactor( Request $request )
    {
        
        $standar = Standar::where('factor_id', '=', $request->factor_id)
            ->get();

        if( !is_null( $standar ) ) {
            return response( [ 'msg' => "Existe Registro", 'value' => true, "data" => $standar ], 200 );
        }

        return response( [ 'msg' => "No hay registros", 'value' => false, "data" => null ], 200 );

    }

}
