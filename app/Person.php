<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    protected $fillable = [
        'full_name',
        'name',
        'sur_name',
        'last_name',
        'document',
        'positions_id',
        'datetime_register',
        'status',
    ];

    public function position(){
        return $this->belongsTo( 'App\Position', 'positions_id', 'id' );
    }
    
}
