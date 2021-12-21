<?php

namespace App\Http\Controllers;

use App\StatusFile;
use Carbon\Carbon;
use Auth;
use Illuminate\Http\Request;

class StatusFileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $statusFileList = StatusFile::get();

        if( count( $statusFileList ) ) {
            return response( [ 'value' => true, 'msg' => 'Listando', 'data' => $statusFileList ], 200 );
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
            $statusFileCreate = StatusFile::create( $request->all() );
            return response( [ 'value' => true, 'msg' => 'Estado creado', 'data' => $statusFileCreate ], 200 );
        } catch (\Excetion $e) {
            return response( [ 'value' => false, 'msg' => 'Error al crear', 'data' => null ], 200 );
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\StatusFile  $statusFile
     * @return \Illuminate\Http\Response
     */
    public function show( $id )
    {
        
        $statusFile = StatusFile::findOrFail( $id );

        if( !is_null( $statusFile ) ) {
            return response( [ 'msg' => "Existe Registro", 'value' => true, "data" => $statusFile ], 200 );
        }

        return response( [ 'msg' => "No hay registros", 'value' => false, "data" => null ], 200 );


    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\StatusFile  $statusFile
     * @return \Illuminate\Http\Response
     */
    public function edit(StatusFile $statusFile)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\StatusFile  $statusFile
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, StatusFile $statusFile)
    {

        $statusFileUpdate = $statusFile->update( $request->all() );

        if( $statusFileUpdate ) {
            return response( [ 'value' => true, 'msg' => 'Estado modificado', 'data' => null ], 200 );
        }

        return response( [ 'value' => false, 'msg' => 'Error al modificar', 'data' => null ], 200 );
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\StatusFile  $statusFile
     * @return \Illuminate\Http\Response
     */
    public function destroy(StatusFile $statusFile)
    {
        
        $statusFileDelete = $statusFile->update( ['status' => 0 ] );
        
        $statusFile = StatusFile::findOrFail( $statusFile->id );

        if( $statusFileDelete ) {
            return response( [ 'value' => true, 'msg' => 'Registro eliminado', 'data' => $statusFile ], 200 );
        }

        return response( [ 'value' => false, 'msg' => 'No se pudo eliminar', 'data' => null ], 200 );

    }

    public function activeDesactive( Request $request )
    {
        StatusFile::findOrFail( $request->id )->update( 
            [
                'status' => $request->status
            ]
        );
        
        return response( [ 'msg' => $request->status ? "Activado" : "Desactivado", 'value' => true, "data" => null ], 200 );

    }

    public function search( Request $request )
    {
        
        $statusFile = StatusFile::where('name', 'LIKE', '%'.$request->name.'%');
            
        $statusFile = $statusFile->get();

        if( count( $statusFile ) > 0 ) {
            return response( [ 'msg' => "Listando", 'value' => true, "data" => $statusFile ], 200 );
        }

        return response( [ 'msg' => "No hay registros", 'value' => false, "data" => null ], 200 );

    }

    public function getActive()
    {
        $statusFileList = StatusFile::where('status', '=', true)->get();

        if( count( $statusFileList ) ) {
            return response( [ 'value' => true, 'msg' => 'Listando', 'data' => $statusFileList ], 200 );
        }
        return response( [ 'value' => false, 'msg' => 'No hay lista', 'data' => null ], 200 );

    }

}
