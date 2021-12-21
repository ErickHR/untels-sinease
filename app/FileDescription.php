<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FileDescription extends Model
{
    
    protected $fillable = [
        'description',
        'files_id',
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo('App\User', 'user_id');
    }


}
