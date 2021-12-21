<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Directory extends Model
{
    
    protected $fillable = [
        'name',
        'user_id',
        'datetime_register',
        'status'
    ];

    public function files(){
        return $this->hasMany('App\File')
            ->where('status', '=', true)
            ->where( 'user_id', '=', Auth::id() );
    }

}
