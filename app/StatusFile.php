<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StatusFile extends Model
{

    protected $fillable = [
        'name',
        'color',
        'user_id',
        'need_msg',
        'datetime_register',
        'status'
    ];

    
}
