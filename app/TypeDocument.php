<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TypeDocument extends Model
{
    
    protected $fillable = [
        'name',
        'status',
        'datetime_register',
        'user_id'
    ];

}
