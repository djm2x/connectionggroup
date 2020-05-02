<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class planification extends Model
{
    protected $guarded = [];

    public function region()
    {
        return $this->belongsTo(Region::class, 'idRegion');
    }
}
