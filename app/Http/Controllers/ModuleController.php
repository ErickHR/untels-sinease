<?php

namespace App\Http\Controllers;

use App\Module;
use App\Utils\WithUtils;

use Carbon\Carbon;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ModuleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        $module = Module::get();

        if( count( $module ) > 0 ) {
            return response( [ 'msg' => "Listando", 'value' => true, "data" => $module ], 200 );
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

        Module::create( $request->all() );

        return response( [ 'msg' => "Registrado", 'value' => true, "data" => null ], 200 );

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Module  $module
     * @return \Illuminate\Http\Response
     */
    public function show( $id )
    {
        
        $module = Module::findOrFail( $id );

        if( !is_null( $module ) ) {
            return response( [ 'msg' => "Existe Registro", 'value' => true, "data" => $module ], 200 );
        }

        return response( [ 'msg' => "No hay registros", 'value' => false, "data" => null ], 200 );

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Module  $module
     * @return \Illuminate\Http\Response
     */
    public function edit(Module $module)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Module  $module
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        
        $module = Module::findOrFail( $id )->update( $request->all() );

        if( $module ) {
            return response( [ 'msg' => "Editado", 'value' => true, "data" => null ], 200 );
        }

        return response( [ 'msg' => "No se pudo editar", 'value' => false, "data" => null ], 200 );

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Module  $module
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id )
    {
        
        Module::findOrFail( $id )->update( 
            [
                'status' => 0
            ]
        );
        
        return response( [ 'msg' => "Desactivado", 'value' => true, "data" => null ], 200 );

    }

    public function activeDesactive( Request $request )
    {
        Module::findOrFail( $request->id )->update( 
            [
                'status' => $request->status
            ]
        );
        
        return response( [ 'msg' => $request->status ? "Activado" : "Desactivado", 'value' => true, "data" => null ], 200 );

    }

    public function search( Request $request )
    {
        
        $module = Module::where('name', 'LIKE', '%'.$request->name)->get();

        if( count( $module ) > 0 ) {
            return response( [ 'msg' => "Listando", 'value' => true, "data" => $module ], 200 );
        }

        return response( [ 'msg' => "No hay registros", 'value' => false, "data" => null ], 200 );

    }

    public function getActive()
    {
        
        $module = Module::where('status', '=', true)->get();

        if( count( $module ) > 0 ) {
            return response( [ 'msg' => "Listando", 'value' => true, "data" => $module ], 200 );
        }

        return response( [ 'msg' => "No hay registros", 'value' => false, "data" => null ], 200 );


    }

    public function withPermissions()
    {
        
        $module = Module::with( WithUtils::module() )->where('status', '=', true)->get();

        if( count( $module ) > 0 ) {
            return response( [ 'msg' => "Listando", 'value' => true, "data" => $module ], 200 );
        }

        return response( [ 'msg' => "No hay registros", 'value' => false, "data" => null ], 200 );


    }

    public function withPermissionsAll(){
        
        $moduleList = Module::with( WithUtils::moduleAuth() )->get();
        // dd( $moduleList );
        if( count( $moduleList ) == 0 )
            return response( [ 'msg' => "No hay registros", 'value' => false, "data" => null ], 200 );

        $moduleListNew = [];

        foreach( $moduleList as $keyModule => $itemModule ) {

            $permissions = [];
            foreach( $itemModule->permissionsAuth as $keyPermissions => $itemPermissions ) {

                if( count( $itemPermissions->rol ) != 0 ) {
                    // unset( $moduleList[ $keyModule ]->permissionsAuth[ $keyPermissions ] );
                    $permissions[] = $moduleList[ $keyModule ]->permissionsAuth[ $keyPermissions ];

                }

            }

            if( count( $permissions ) != 0 ){

                unset( $itemModule->permissionsAuth );

                $moduleListNew[] = $itemModule;

                $moduleListNew[ count( $moduleListNew ) - 1 ]['permissions_auth'] = $permissions;
                
            }

            // if( count( $itemModule->permissionsAuth ) == 0 ) {

            //     unset( $moduleList[ $keyModule ] );

            // }

        }

        // $moduleListEnconde = $moduleList ;

        return $moduleListNew ;

        // return response( [ 'msg' => "Listando", 'value' => true, "data" => $moduleList ], 200 );

    }

}
