<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::resource('dimension', 'DimensionController');
Route::get('factor-get-by-dimension/{dimension_id}', 'FactorController@getByDimension');
Route::get('standar-get-by-factor/{factor_id}', 'StandarController@getByFactor');
Route::get('file-get-by-standar/{standar_id}/{status_file}', 'FileController@getByStandar');
Route::get('status-file-get-active', 'StatusFileController@getActive');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
