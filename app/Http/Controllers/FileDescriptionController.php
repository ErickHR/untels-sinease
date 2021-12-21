<?php

namespace App\Http\Controllers;

use App\FileDescription;
use App\Utils\WithUtils;
use Illuminate\Http\Request;

class FileDescriptionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\FileDescription  $fileDescription
     * @return \Illuminate\Http\Response
     */
    public function show( $id )
    {

        $fileDescription = FileDescription::with(WithUtils::fileDescription())->where( 'files_id', '=', $id )->get();

        if( count( $fileDescription ) > 0 ) {
            return response( [ 'msg' => "Listando", 'value' => true, "data" => $fileDescription ], 200 );
        }

        return response( [ 'msg' => "No hay registros", 'value' => false, "data" => null ], 200 );

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\FileDescription  $fileDescription
     * @return \Illuminate\Http\Response
     */
    public function edit(FileDescription $fileDescription)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\FileDescription  $fileDescription
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, FileDescription $fileDescription)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\FileDescription  $fileDescription
     * @return \Illuminate\Http\Response
     */
    public function destroy(FileDescription $fileDescription)
    {
        //
    }
}
