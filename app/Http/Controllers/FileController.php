<?php

namespace App\Http\Controllers;

use App\File;
use App\Utils\WithUtils;
use Carbon\Carbon;
use App\FileDescription;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;

class FileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        $fileList = File::with( WithUtils::file() )->where('status', '=', true)
            ->where( 'user_id', '=', Auth::id() )
            ->get();

        if( count( $fileList ) ) {
            return response( [ 'value' => true, 'msg' => 'Listando', 'data' => $fileList ], 200 );
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
                'datetime_register' => Carbon::now(),
                'user_id' => Auth::id(),
                'status_file_id' => 1
            ] 
        );
        
        $fileList = File::create( $request->all() );

        return response( [ 'value' => true, 'msg' => 'Registrado', 'data' => $fileList ], 200 );

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\File  $file
     * @return \Illuminate\Http\Response
     */
    public function show(File $file)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\File  $file
     * @return \Illuminate\Http\Response
     */
    public function edit(File $file)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\File  $file
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, File $file)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\File  $file
     * @return \Illuminate\Http\Response
     */
    public function destroy(File $file)
    {
        //
    }

    public function upload( Request $request ) {

        $uploadedFile = $request->file('file');
        $filename = Auth::id().'_'.Carbon::now()->format('Y-m-d_H-i-s').'_'.$uploadedFile->getClientOriginalName();
        $storageUpload = Storage::disk('local')->putFileAs(
          'public/files',
          $uploadedFile,
          $filename
        );

        $data = [
            'url' => str_replace( "public/files", "get", $storageUpload ),
            'name_file' => $filename
        ];

        return response( [ 'value' => true, 'msg' => 'Documento subido', 'data' => $data ], 200 );
   
    }

    public function fileShow(){

    }

    public function fileDowload( $img ){
        return Storage::download('public/files/'.$img);
    }

    function downloadFile($file_name){
        return Storage::response('public/files/'.$file_name);
        // $file = Storage::disk('public')->get('/files/'.$file_name, [
            // 'Content-Disposition' => 'inline; filename="'. $file_name .'"'
        // ]);
        // return $file;
        // return (new Response($file, 200))
        // ->header('Content-Type', 'image/jpeg');
        // return response()->file( $file );
        // return response( [ $file ], 200, ['Content-Type' => 'application/pdf'] );

        // return (new Response($file, 200));
    }

    public function search( Request $request )
    {
        $fileList = File::with( WithUtils::file() )->where('name', 'LIKE', '%'.$request->name.'%');

        if( !is_null( $request->idCategory ) ) {
            $fileList = $fileList->where('standars_id', '=', $request->idCategory);
        }
            
        $fileList = $fileList->get();

        if( count( $fileList ) > 0 ) {
            return response( [ 'msg' => "Listando", 'value' => true, "data" => $fileList ], 200 );
        }

        return response( [ 'msg' => "No hay registros", 'value' => false, "data" => null ], 200 );

    }

    public function changeStatus( Request $request ){

        if( $request->need_msg ) {

            $data = [
                'description' => $request->description,
                'files_id' => $request->id_file,
                'user_id' => Auth::id()
            ];

            FileDescription::create( $data );

        }

        $fileUpdate = File::findOrFail( $request->id_file )->update( [ 'status_file_id' => $request->id_status_file ] );
        
        return response( [ 'msg' => "Estado cambiado", 'value' => true, "data" => null ], 200 );

    }

    public function getFile()
    {
        
        $fileList = File::with( WithUtils::file() )->where('status', '=', true)
            ->get();

        if( count( $fileList ) ) {
            return response( [ 'value' => true, 'msg' => 'Listando', 'data' => $fileList ], 200 );
        }

        return response( [ 'value' => false, 'msg' => 'No hay lista', 'data' => null ], 200 );

    }

}
