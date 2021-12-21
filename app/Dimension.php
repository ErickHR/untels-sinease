<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Dimension extends Model
{

    protected $fillable = [
        'name',
        'user_id',
        'datetime_register',
        'status'
    ];

    public function factor(){
        return $this->hasMany(  'App\Factor' );
    }

}
