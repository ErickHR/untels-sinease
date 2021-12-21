<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Factor extends Model
{
    
    protected $fillable = [
        'name',
        'dimension_id',
        'user_id',
        'datetime_register',
        'status'
    ];

    public function standarList(){
        return $this->hasMany('App\Standar', 'category_standar_id' );
    }

}
