<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Permissions extends Model
{

    protected $fillable = [
        'name',
        'url',
        'icon',
        'has_two_actions',
        'module_id',
        'status',
        'user_id',
    ];

    protected $hidden = [
        'pivot',
        'created_at',
        'updated_at'
    ];

    public function rol(){

        return $this->belongsToMany( 'App\Rol', 'permission_rol', 'permission_id', 'rol_id' );

    }

    public function module(){

        return $this->belongsTo( 'App\Module', 'module_id' );

    }
    
}
