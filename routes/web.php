<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

// Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');


// Route::get('/token', function () {
//     return csrf_token(); 
// });
// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/show-report', function () {
    return view('viewOtherRols');
});

// Route::get('/home', function () {
//     return redirect('/login');
// });

// Auth::routes();
Auth::routes(['verify' => true]);

Route::get('register', function () {
    return redirect('/');
});

Route::middleware(['auth'])->group(function () {

    Route::get('/', 'HomeController@index')->name('home');
    // Route::get('/home', 'HomeController@index')->name('home');

    Route::resource('standar', 'StandarController');
    Route::post('standar-search', 'StandarController@search');
    Route::post('standar-active-desactive', 'StandarController@activeDesactive');
    Route::get('standar-by-office', 'StandarController@byOffice');

    Route::resource('position', 'PositionController');
    Route::post('position-active-desactive', 'PositionController@activeDesactive');
    Route::post('position-search', 'PositionController@search');
    Route::get('position-get-active', 'PositionController@getActive');

    Route::resource('permissions', 'PermissionsController');
    Route::get('permissions-with', 'PermissionsController@with');
    Route::post('permissions-active-desactive', 'PermissionsController@activeDesactive');

    Route::resource('status-file', 'StatusFileController');
    Route::post('status-file-active-desactive', 'StatusFileController@activeDesactive');
    Route::post('status-file-search', 'StatusFileController@search');
    Route::get('status-file-get-active', 'StatusFileController@getActive');

    Route::resource('rol', 'RolController');
    Route::get('rol-with-all', 'RolController@withAll');
    Route::post('rol-search', 'RolController@search');

    Route::resource('person', 'PersonController');

    Route::resource('user', 'UserController');
    Route::get('user-role', 'UserController@role');
    Route::post('user-change-password', 'UserController@changePassword');

    Route::resource('module', 'ModuleController');
    Route::post('module-active-desactive', 'ModuleController@activeDesactive');
    Route::post('module-search', 'ModuleController@search');
    Route::get('module-get-active', 'ModuleController@getActive');
    Route::get('module-with-permissions', 'ModuleController@withPermissions');
    Route::get('module-with-permissions-all', 'ModuleController@withPermissionsAll');

    Route::resource('factor', 'FactorController');
    Route::get('factor-with-file', 'FactorController@withFile');
    Route::post('factor-active-desactive', 'FactorController@activeDesactive');
    Route::post('factor-search', 'FactorController@search');

    Route::resource('office', 'OfficeController');
    Route::get('office-with-standar', 'OfficeController@withStandar');
    Route::post('office-active-desactive', 'OfficeController@activeDesactive');
    Route::post('office-search', 'OfficeController@search');

    Route::resource('dimension', 'DimensionController');
    Route::get('dimension-with-factor', 'DimensionController@withFactor');
    Route::post('dimension-active-desactive', 'DimensionController@activeDesactive');
    Route::post('dimension-search', 'DimensionController@search');

    Route::resource('file', 'FileController');
    Route::post('file-active-desactive', 'FileController@activeDesactive');
    Route::post('file-search', 'FileController@search');
    Route::post('file-change-status', 'FileController@changeStatus');
    Route::get('file-show', 'FileController@fileShow');
    Route::get('file-dowloand/files/{img}', 'FileController@fileDowload');
    Route::get('get/{file_name}', 'FileController@downloadFile');
    Route::get('file-dowloand-all/files-all', 'ZipDowload@fileDowloadAll');
    Route::get('file-get-file', 'FileController@getFile');
    Route::post('file-upload', 'FileController@upload');

    Route::resource('file-description', 'FileDescriptionController');

    Route::resource('directory', 'DirectoryController');
    Route::get('directory-mine', 'DirectoryController@mine');

    Route::get('report-count-file-aproved-desaproved', 'ReportController@countFileAprovedDesaproved');
  
});