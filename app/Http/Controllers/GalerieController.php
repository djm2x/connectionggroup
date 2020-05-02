<?php

namespace App\Http\Controllers;

use App\galerie;
use Illuminate\Http\Request;

class GalerieController extends SuperController
{
    public function __construct(galerie $model)
    {
        parent::__construct($model);
    }

    public function list()
    {
        $list = $this->_context->orderBy('id', 'desc')->get();
        return view('page/galerie', compact('list'));
    }

    public function detail(int $id)
    {
        // $model = $this->_context->findById($id);
        $model = $this->_context
            ->where('id', $id)
            ->first();
            ;

        $images = explode(";", $model->imageUrl);
        array_pop($images);

        return view('page/detail-galerie', compact('model', 'images'));
    }
}
