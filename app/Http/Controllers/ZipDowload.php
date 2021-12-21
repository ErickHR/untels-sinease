<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use File;
use ZipArchive;

class ZipDowload extends Controller
{
    
    public function fileDowloadAll(){

        $zip = new ZipArchive;
        $fileName = 'myzip.zip';

        if( $zip->open( public_path( $fileName ), ZipArchive::CREATE ) == TRUE ) {

            $files = File::files( public_path('storage/files') );
            foreach( $files as $key => $value ) {
                $relativeName = basename( $value );
                $zip->addFile( $value, $relativeName );
            }

            $zip->close();

        }

        return response()->download( public_path( $fileName ) );

        // $files = glob(storage_path('app/public/*'));
        
        // /* Le indicamos en que carpeta queremos que se genere el zip y los comprimimos*/
        // Zipper::make(storage_path('app/public/ejemplo.zip'))->add($files)->close();
        
        // /* Por último, si queremos descarlos, indicaremos la ruta del archiv, su nombre
        // y lo descargaremos*/
        // return response()->download(storage_path('app/public/ejemplo.zip'));

        // return response()->download(public_path('storage\files'));
        // return Storage::allDirectories('public/files');
        // return Storage::download('public/files');

    }

}
