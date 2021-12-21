<?php

namespace App\Http\Controllers;

use App\Permissions;
use App\Utils\WithUtils;
use Auth;
use Carbon\Carbon;
use Illuminate\Http\Request;

class PermissionsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        $permissionsList = Permissions::get();

        if( count( $permissionsList ) ) {
            return response( [ 'value' => true, 'msg' => 'Listando', 'data' => $permissionsList ], 200 );
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
            ]
        );

        try {

            $permissionsCreate = Permissions::create( $request->all() );

            return response( [ 'value' => true, 'msg' => 'Position creado', 'data' => $permissionsCreate ], 200 );

        } catch (\Excetion $e) {
            return response( [ 'value' => false, 'msg' => 'Error al crear', 'data' => null ], 200 );
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Permissions  $permissions
     * @return \Illuminate\Http\Response
     */
    public function show( $id )
    {
        
        $permissions = Permissions::with( WithUtils::permissions() )->findOrFail( $id );

        if( !is_null( $permissions ) ) {
            return response( [ 'msg' => "Existe Registro", 'value' => true, "data" => $permissions ], 200 );
        }

        return response( [ 'msg' => "No hay registros", 'value' => false, "data" => null ], 200 );

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Permissions  $permissions
     * @return \Illuminate\Http\Response
     */
    public function edit(Permissions $permissions)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Permissions  $permissions
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id )
    {
        $permissionsUpdate =  Permissions::findOrFail( $id )->update( $request->all() );

        if( $permissionsUpdate ) {
            return response( [ 'value' => true, 'msg' => 'Permiso modificado', 'data' => null ], 200 );
        }

        return response( [ 'value' => false, 'msg' => 'Error al modificar', 'data' => null ], 200 );

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Permissions  $permissions
     * @return \Illuminate\Http\Response
     */
    public function destroy(Permissions $permissions)
    {
        $permissionsDelete = $standar->update( ['status' => 0 ] );
        

        if( $permissionsDelete ) {
            return response( [ 'value' => true, 'msg' => 'Registro eliminado', 'data' => null ], 200 );
        }

        return response( [ 'value' => false, 'msg' => 'No se pudo eliminar', 'data' => null ], 200 );

    }
    
    public function with()
    {
        
        $permissionsList = Permissions::with( WithUtils::permissions() )->where('status', '=', true)->get();

        if( count( $permissionsList ) ) {
            return response( [ 'value' => true, 'msg' => 'Listando', 'data' => $permissionsList ], 200 );
        }

        return response( [ 'value' => false, 'msg' => 'No hay lista', 'data' => null ], 200 );

    }

    public function activeDesactive( Request $request )
    {
        
        Permissions::findOrFail( $request->id )->update( 
            [
                'status' => $request->status
            ]
        );
        
        return response( [ 'msg' => $request->status ? "Activado" : "Desactivado", 'value' => true, "data" => null ], 200 );

    }

}
