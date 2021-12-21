<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Standar extends Model
{
    
    protected $fillable = [
        'name',
        'factor_id',
        'datetime_register',
        'user_id',
        'status'
    ];

    protected $hidden = [
        'pivot'
    ];

    public function factor(){
        return $this->belongsTo('App\Factor', 'factor_id', 'id' );
    }

    public function file(){
        return $this->hasMany('App\File', 'standars_id', 'standars_id');
    }

}
