<?php

namespace App\Http\Controllers;

use App\User;
use App\Utils\WithUtils;
use Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;


class UserController extends Controller
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

        $request->merge([ 'password' => Hash::make( $request->password ) ]);
        $userCreate = User::create( $request->all() );

        $userCreate->rolList()->sync( $request->rols );
        
        return response( [ 'value' => true, 'msg' => 'Se ha registrado', 'data' => null ], 200 );
        
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

    public function role(){

        $user = User::with( WithUtils::user() )->findOrFail( Auth::id() );
       
        $permissions = app( 'App\Http\Controllers\ModuleController' )->withPermissionsAll();

        $user->permissions = $permissions;

        return $user;

    }

    public function changePassword( Request $request ){

        $request->merge([ 'password' => Hash::make( $request->passwordNew ) ]);

        $user = User::findOrFail( Auth::id() )->update( $request->all() );

        return response( [ 'value' => true, 'msg' => 'Contraseña actualizada', 'data' => null ], 200 );

    }

}
