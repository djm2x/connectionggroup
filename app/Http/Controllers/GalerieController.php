<?php

namespace App\Http\Controllers;

use App\blog;
use App\galerie;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class GalerieController extends SuperController
{
    public function __construct(blog $model, galerie $model2)
    {
        parent::__construct($model);
    }

    // public function list()
    // {
    //     $list = $this->_context->orderBy('id', 'desc')->get();
    //     return view('page/galerie', compact('list'));
    // }

    public function list()
    {
        $q = $this->_context
            ->whereDate('date', '<=' , Carbon::today()->toDateString())
            ->where('imageUrl', '<>', '')
            ->where('type', 'NOT LIKE', "%nationales%")
            ;

        $count = $q->count();

        $list = $q->orderBy('date', 'desc')
                ->get()
                ;

        return view('page/galerie', compact('list', 'count'));
    }

    public function test()
    {
        $model = $this->_context
            ->where('id', 6)
            ->first();
            ;

        $images = explode(";", $model->imageUrl);
        array_pop($images);

        return view('page/galerie-test', compact('model', 'images'));
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
