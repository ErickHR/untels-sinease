<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Position extends Model
{
    
    protected $fillable = [
        'name',
        'office_id',
        'datetime_register',
        'status'
    ];

    public function office(){

        return $this->belongsTo( 'App\Office', 'office_id', 'id' );

    }

}
