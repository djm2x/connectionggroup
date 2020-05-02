<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Activite extends Model
{
    protected $guarded = [];

    public function region()
    {
        return $this->belongsTo(Region::class, 'idRegion');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'idUser');
    }
}
