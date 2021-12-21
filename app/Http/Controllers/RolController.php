<?php

namespace App\Http\Controllers;

use App\Rol;
use App\Permissions;
use App\Module;
use App\Utils\WithUtils;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Auth;

class RolController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $moduleList = Module::get();


        $rolList = Rol::with( WithUtils::rol() )->where('status', '=', true)->get();
        foreach( $rolList as $keyRol => $itemRol ) {

            $moduleListForRol = json_decode( json_encode( $moduleList ) );

            foreach( $itemRol->permissions as $itemPermissions ) {
                
                foreach( $moduleListForRol as $keyModyleListForRol => $itemModuleListForRol ) {

                    if( $itemPermissions->module->name == $itemModuleListForRol->name  ) {
                        
                        $itemModuleListForRol->permissions[] = $itemPermissions;
                        
                    }

                }

            }

            foreach( $moduleListForRol as $keyModyleListForRol => $itemModuleListForRol ) {

                if( !isset( $itemModuleListForRol->permissions ) ) {

                    unset( $moduleListForRol[ $keyModyleListForRol ] );

                }

            }


            $rolList[ $keyRol ]->module = $moduleListForRol;
            unset( $rolList[ $keyRol ]->permissions );

        }

        if( count( $rolList ) ) {
            return response( [ 'value' => true, 'msg' => 'Listando', 'data' => $rolList ], 200 );
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
                'user_id' => Auth::id(), 
                'datetime_register' => Carbon::now()
            ]
        );
        
        $rolCreate = Rol::create( $request->all() );

        $rolCreate->permissions()->attach( $request->permissions_list );

        return response( [ 'value' => true, 'msg' => 'Permiso registrado', 'data' => $rolCreate ], 200 );

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Rol  $rol
     * @return \Illuminate\Http\Response
     */
    public function show( $id )
    {
        
        $rol = Rol::with( WithUtils::rol() )->findOrFail( $id );

        if( !is_null( $rol ) ) {
            return response( [ 'msg' => "Existe Registro", 'value' => true, "data" => $rol ], 200 );
        }

        return response( [ 'msg' => "No hay registros", 'value' => false, "data" => null ], 200 );

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Rol  $rol
     * @return \Illuminate\Http\Response
     */
    public function edit(Rol $rol)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Rol  $rol
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id )
    {
        $rol = Rol::findOrFail( $id );

        // $rol->permissions()->detach( $request->permissions_list );
        $rol->permissions()->sync( $request->permissions_list );

        $rol->update( $request->all() );

        return response( [ 'value' => true, 'msg' => 'Se ha modificado', 'data' => null ], 200 );


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Rol  $rol
     * @return \Illuminate\Http\Response
     */
    public function destroy(Rol $rol)
    {
        
        $rolDelete = $rol->update( ['status' => 0 ] );
        
        if( $rolDelete ) {
            return response( [ 'value' => true, 'msg' => 'Registro eliminado', 'data' => null ], 200 );
        }

        return response( [ 'value' => false, 'msg' => 'No se pudo eliminar', 'data' => null ], 200 );
        
    }

    public function withAll(){

        // $rolList = Rol::with( WithUtils::rol() )->get();

        $permissionsList = Permissions::with( WithUtils::permissions() )->get();

        return $permissionsList;

    }
    
    public function search( Request $request )
    {
        $rolList = Rol::with( WithUtils::rol() )->where('status', '=', true)->where('name', 'LIKE', '%'.$request->name.'%')->get();
        
        if( count( $rolList ) ) {
            return response( [ 'value' => true, 'msg' => 'Listando', 'data' => $rolList ], 200 );
        }

        return response( [ 'value' => false, 'msg' => 'No hay lista', 'data' => null ], 200 );

    }


}
