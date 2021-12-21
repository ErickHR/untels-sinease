<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Rol extends Model
{
    
    protected $fillable = [
        'name',
        'user_id',
        'datetime_register',
        'status'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'pivot'
    ];

    public function permissions(){

        return $this->belongsToMany( 'App\Permissions', 'permission_rol', 'rol_id', 'permission_id', 'id', 'id'  );

    }

}
