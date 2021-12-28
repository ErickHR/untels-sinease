<?php

namespace App\Http\Controllers;

use App\File;
use App\StatusFile;
use App\Utils\WithUtils;
use Carbon\Carbon;
use App\FileDescription;

use Illuminate\Http\Request;

class ReportController extends Controller
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function countFileAprovedDesaproved(){

        $report = [];

        $files = File::get();
        $filesDelete = File::where( 'status', '=', false )->get();
        $filesCount = $files->count();
        $filesDeleteCount = $filesDelete->count();

        $report[] =
            [ 
                [ 'label' => 'Archivos Subidos', 'backgroundColor' => '#f87979', 'data' => [$filesCount] ], 
                [ 'label' => 'Archivos Eliminados', 'backgroundColor' => '#9728dd', 'data' => [$filesDeleteCount] ]
                // [ 'label' => 'Archivos Eliminados', 'backgroundColor' => '#9728dd', 'data' => [2] ] 
            ];

        $statusFiles = StatusFile::withCount( WithUtils::statusFile() )->get();
        $reportStatusFile = [];
        $reportStatusFileName = [];
        $reportStatusFileData = [];

        foreach( $statusFiles as $statusFilesvalue ) {

            $reportStatusFile[] = ( [ 'label' => $statusFilesvalue->name, 'backgroundColor' => '#f87979', 'data' => [$statusFilesvalue->file_count] ] );
            $reportStatusFileName[] = $statusFilesvalue->name;
            $reportStatusFileData[] = $statusFilesvalue->file_count;
        }

        $reportStatusFilePolarArea = [ 
                'labels' => $reportStatusFileName,
                'datasets' => [
                    [
                        'data' => $reportStatusFileData,
                        'backgroundColor' => [
                            'rgb(255, 99, 132)',
                            'rgb(75, 192, 192)',
                            'rgb(255, 205, 86)',
                            'rgb(201, 203, 207)',
                            'rgb(54, 162, 235)'
                          ]
                        
                    ]
                ]
            ] ;

        $report[] = ( $reportStatusFile );
        $report[] = ( $reportStatusFilePolarArea );

        // $statusFilesCount = $statusFiles->count();

        return response( [ 'msg' => "Estado cambiado", 'value' => true, "data" => $report ], 200 );
    }

}
