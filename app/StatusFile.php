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

    public function file()
    {
        return $this->hasMany('App\File', 'status_file_id');
    }
    
}
