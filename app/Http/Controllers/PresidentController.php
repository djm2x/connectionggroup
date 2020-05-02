<?php

namespace App\Http\Controllers;

use App\President;
use Illuminate\Http\Request;

class PresidentController extends SuperController
{
    public function __construct(President $model)
    {
        parent::__construct($model);
    }

    public function list()
    {
        $model = $this->_context->first();
        return view('page/president', compact('model'));
    }
}
