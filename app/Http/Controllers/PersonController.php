<?php

namespace App\Http\Controllers;

use App\Person;
use App\User;
use App\Utils\WithUtils;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class PersonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $personList = Person::with( WithUtils::person() )->where('status', '=', true)->get();

        if( count( $personList ) ) {
            return response( [ 'value' => true, 'msg' => 'Listando', 'data' => $personList ], 200 );
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
        $personCreate = Person::create( $request->all() );

        $request->merge(
            [ 
                'password' => Hash::make( '123456' ),
                'person_id' => $personCreate->id
            ]
        );
        
        $userCreate = User::create( $request->all() );

        $userCreate->role()->sync( $request->rol_id );

        return response( [ 'value' => true, 'msg' => 'Se ha registrado', 'data' => null ], 200 );

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Person  $person
     * @return \Illuminate\Http\Response
     */
    public function show(Person $person)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Person  $person
     * @return \Illuminate\Http\Response
     */
    public function edit(Person $person)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Person  $person
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Person $person)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Person  $person
     * @return \Illuminate\Http\Response
     */
    public function destroy(Person $person)
    {
        //
    }
}
