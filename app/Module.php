<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Auth;
use App\User;
use App\Utils\WithUtils;

class Module extends Model
{
    
    protected $fillable = [
        'name',
        'icon',
        'text',
        'user_id',
        'status',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function permissions(){

        return $this->hasMany( 'App\Permissions' );

    }

    public function permissionsAuth(){

        $user = User::with( WithUtils::user() )->findOrFail( Auth::id() );
        // dd( $user->role );
        $rol = $user->role[0]->name;
        // $rol = 'DOCENTE';

        return $this->hasMany( 'App\Permissions' )->with(
            [
                'rol' => function($query) use( $rol )  {
                    $query->where( 'name', '=', $rol );
                }
            ]
        );

    }

}
