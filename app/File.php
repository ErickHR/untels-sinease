<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class File extends Model
{

    protected $fillable = [
        'name',
        'url',
        'name_file',
        'description',
        'directory_id',
        'standars_id',
        'user_id',
        'datetime_register',
        'status_file_id',
        'status',
    ];

    public function standar()
    {
        return $this->belongsTo('App\Standar', 'standars_id');
    }

    public function statusFile()
    {
        return $this->belongsTo('App\StatusFile', 'status_file_id');
    }

    public function user()
    {
        return $this->belongsTo('App\User', 'user_id');
    }
    
    public function fileDescription()
    {
        return $this->hasMany('App\FileDescription', 'files_id' );
    }

}
