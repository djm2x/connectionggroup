<?php

namespace App\Http\Controllers;

use App\Region;
use Illuminate\Http\Request;

class RegionController extends SuperController
{
    public function __construct(Region $model)
    {
        parent::__construct($model);
    }

    public function list()
    {
        $list = $this->_context->all();
        return view('page/region', compact('list'));
    }
}
