<?php

namespace App\Http\Controllers;

use App\Article;

class ArticleController extends SuperController
{
    public function __construct(Article $model)
    {
        parent::__construct($model);
    }

    public function page(string $article) // : Collection
    {
        if (!view()->exists("page/articles/{$article}")) {
            return view("notfound");
        }

        $q = $this->_context
            ->where('title', 'LIKE', "%{$article}%")
            // ->whereRaw("title like  '%$article%'")
            ;

        if ($article == 'president') {
            $q->orWhere('title', 'LIKE', "%président%");
        }

        if ($article == 'realisations') {
            $q->orWhere('title', 'LIKE', "%réalisation%");
        }

        if ($article == 'presentation') {
            $q->orWhere('title', 'LIKE', "%présentation%");
        }

        if ($article == 'notre-mission') {
            $q->orWhere('title', '=', "Notre Mission");
        }



        // dd($article);

        $model = $q->first();

        if ($model == null) {
            return view('notfound');
        }

        return view("page/articles/{$article}", compact('model'));
    }
}
