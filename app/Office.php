<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Office extends Model
{
    
    protected $fillable = [
        'name',
        'datetime_register',
        'status'
    ];

    protected $hidden = [
        'pivot'
    ];

    public function standar(){
        return $this->belongsToMany( 'App\Standar', 'office_standar', 'office_id', 'standar_id' );
            // ->withPivot('user_id','datetime_register', 'status')
            // ->withTimestamps();
    }

}
