<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FileHistory extends Model
{
    
    protected $fillable = [
        'name',
        'file_id',
        'status_file_id',
        'user_id',
        'datetime_register',
        'status'
    ];

}
