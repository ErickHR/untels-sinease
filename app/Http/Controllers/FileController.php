<?php

namespace App\Http\Controllers;

use App\File;
use App\Utils\WithUtils;
use Carbon\Carbon;
use App\FileDescription;

// use Spatie\PdfToImage\Pdf;
use \Baraja\PdfToImage\Convertor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
// use Org_Heigl\Ghostscript\Ghostscript;

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
        // return response()->file(Storage::get('public/files/'.$file_name), ['Content-Type' => 'image/jpeg']);
        // return Storage::url('public/files/'.$file_name);
        // $pathDiskLocal = Storage::url('files/1_2022-01-03_10-48-25_UPS-CT004754 (3).pdf');
        // $pathDiskLocal = Storage::disk('local')->getDriver()->getAdapter()->getPathPrefix();
        // $pdfPath = $pathDiskLocal.'public\files\\'.$file_name;
        // $imagePath = $pathDiskLocal.'public\files\\'.$file_name;

        // // Render PDF to image and save to disk.
        // Convertor::convert($pdfPath, $imagePath, 'jpg');
        // return true;
        // return [$pathDiskLocal, $pathDiskLocal.'public\files\\'.$file_name];
        // return [ file_exists($pathDiskLocal.'public\files\\'.$file_name) ];
        // $pdf = new Pdf( $pathDiskLocal.'public\files\\'.$file_name );
        // $pdf->setCompressionQuality(85);
        // $pdf->setColorspace(1);
        // $pdf->setGsPath($pathDiskLocal.'public\files\\');
        // $pdf->setOutputFormat('png');
        // $pageLimit = $pdf->getNumberOfPages() > 10 ? 10: $pdf->getNumberOfPages();
        //      if($pdf->getNumberOfPages() >1) {
        //         //using if to account for possible count of 0, rather than just relying on the loop
        //         for ($i = 1; $i <=$pageLimit; $i++) {
        //             $name = md5(time()) . ".png";
        //             $tempPath = sys_get_temp_dir() . "/" . $name;
        //             //
        //             $pdf->setPage($i)
        //                 ->saveImage($tempPath);
        //             //
        //             Storage::disk('local')->put("/preview/{$name}", file_get_contents($tempPath), 'public');

        //             $page = new PreviewImagePage();
        //             $page->url = "preview/{$name}";
        //             $page->asset_file_history_id = $historyID;
        //             $page->save();

        //         }//loop through the pages
        //     }//if
        //     else
        //     {
        //         $name = md5(time()) . ".png";
                // $tempPath = sys_get_temp_dir() . "/" . $file_name;
        //         //
        //         $pdf->saveImage($tempPath);
        //         //
        //         Storage::disk('local')->put("/preview/{$name}", file_get_contents($tempPath), 'public');

        //         $page = new PreviewImagePage();
        //         $page->url = "preview/{$name}";
        //         $page->asset_file_history_id = $historyID;
        //         $page->save();

        //     }
        // $pdf_url = 'C:\Program Files\public\pdf\file.pdf';
        // $pdf = new Pdf($pdf_url);
        // Ghostscript::setGsPath("C:\Program Files\gs\gs9.52\bin\gswin64c.exe");
        // $pdf->setOutputFormat('png')->saveImage($tempPath);
        // // $pdf->saveImage($tempPath);
        // $img = file_get_contents( $tempPath );
        // // $img = file_get_contents(public_path( $tempPath ));
        // return response($img)->header('Content-type','image/png');
        // // return $pdf->getNumberOfPages();
        return Storage::response('public/files/'.$file_name);
        // $file = Storage::disk('public')->get('/files/'.$file_name, [
            // 'Content-Disposition' => 'inline; filename="'. $file_name .'"'
        // ]);
        // return $file;
        // return response( [Storage::response('public/files/'.$file_name)], 200)
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

    public function activeDesactive( Request $request )
    {

        File::findOrFail( $request->id )->update( 
            [
                'status' => false
            ]
        );
        
        return response( [ 'msg' => $request->status ? "Activado" : "Desactivado", 'value' => true, "data" => null ], 200 );

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

    public function getByStandar( Request $request )
    {
        
        $fileList = File::where('standars_id', '=', $request->standar_id)
            ->where('status_file_id', '=', $request->status_file)
            ->where('status', '=', true)
            ->get();

        if( count( $fileList ) ) {
            return response( [ 'value' => true, 'msg' => 'Listando', 'data' => $fileList ], 200 );
        }

        return response( [ 'value' => false, 'msg' => 'No hay lista', 'data' => null ], 200 );

    }

    public function showImg( Request $request )
    {
        
        $pdf = new Spatie\PdfToImage\Pdf($pathToPdf);
        $pdf->saveImage($pathToWhereImageShouldBeStored);

    }

}
