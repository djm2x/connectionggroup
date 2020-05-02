<?php

namespace App\Http\Controllers;

use App\Article;
class HomeController extends SuperController
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Article $model)
    {
        // $this->middleware('auth');
        parent::__construct($model);
    }

    public function index()
    {
        $presentation = $this->_context
        ->where('title', 'LIKE', "%présentation%")
        ->first()
        ;

        if ($presentation == null) {
            return view('notfound');
        }

        return view('page/home', ['model' => $presentation]);
    }
}
