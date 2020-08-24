<?php

namespace App\Http\Controllers;

use App\blog;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class BlogController extends SuperController
{
    private $types = [
        "nationales",

        "formation",
        "conference",
        "divers",
        "agenda",
        "news",
        "interviews",
        "communiques",
        "press",
        // "intrenationales",
    ];

    public function __construct(blog $model)
    {
        parent::__construct($model);
    }

    // for angular
    public function getAll(int $startIndex, int $pageSize, string $sortBy, string $sortDir, string $idType, string $title) // : Collection
    {
        $q = $this->_context;
        // $b = $idType != '*';
        if ($idType != '*') {
            $q = $q->where('type', 'LIKE', "%{$idType}%");
        }

        if ($title != '*') {
            $q = $q->where('title', 'LIKE', "%{$title}%");
        }

        $list = $q->orderBy($sortBy, $sortDir)
            ->skip($startIndex)
            ->take($pageSize)
            ->get();

        $count = $this->_context->get()->count();

        return compact('list', 'count', 'idType');
    }

    public function newsTopThree() // : Collection
    {
        $list = $this->_context
            ->where('date', '<=', Carbon::today()->toDateString())
            ->orderBy('date', 'desc')
            ->take(3)
            ->get()
            ;

        return ['list' => $list];
    }

    public function agendaTopThree() // : Collection
    {
        $list = $this->_context
            ->where('date', '>', Carbon::today()->toDateString())
            ->orderBy('date', 'desc')
            ->take(3)
            ->get()
            ;

        return ['list' => $list];
    }

    // for js inside blade
    public function pageApi(int $startIndex, int $pageSize, string $type, int $year) // : Collection
    {

        $type =  $type == 'conference' ? 'Conférence' : $type;
        // get blog of one type
        $q = $this->_context
            // ->where('type', 'LIKE', "%{$type}%")
            ->whereRaw(($type == 'news' || $type == 'agenda') ? '1 = 1' : "type like '%{$type}%'")
            ->whereDate('date', ($type != 'agenda') ? '<=': '>' , Carbon::today()->toDateString())
            ->where('type', 'NOT LIKE', "%nationales%")
            ;



        // filter blogs by years
        if ($year != 0) {
            $q->whereYear('date', '=', $year);
        }

        $count = $q->count();

        $list = $q->orderBy('date', 'desc')->skip($startIndex)->take($pageSize)->get();

        return ['list' => $list, 'count' => $count] ;
        // return compact('list', 'count');
    }

    // for server side rendering
    public function page(string $type) // : Collection
    {
        if (!in_array($type, $this->types)/*!view()->exists("page/blogs/{$type}")*/) {
            return view("notfound");
        }

        $type =  $type == 'conference' ? 'Conférence' : $type;
        $title = ucfirst($type);

        $q = $this->_context
            // ->where('type', 'LIKE', "%{$type}%")

            // ->whereRaw('email = ? or name like ?', [$request->email,"%{$request->name}%"])
            ->whereRaw(($type == 'news' || $type == 'agenda') ? '1 = 1' : "type like '%{$type}%'")
            ->whereDate('date', ($type != 'agenda') ? '<=': '>' , Carbon::today()->toDateString())
            // ->whereRaw('type like ?', ["%{$type}%"])
            ;

        if ($type == 'nationales') {
            return view("page/blogs/{$type}", ['list' => $q->get()]);
        }

        $q = $q->where('type', 'NOT LIKE', "%nationales%");

        $rawSql = env('DB_CONNECTION') == 'sqlite' ? "strftime('%Y', date) as year" : 'YEAR(date) as year';

        $count = $q->count();

        $q2 = clone($q);

        $years = $q2->select(DB::raw($rawSql))->distinct('year')->orderBy('date', 'desc')->get();

        $list = $q->orderBy('date', 'desc')->skip(0)->take(6)->get();

        // dd($years);

        // $years = array_unique ($years);

        $type =  $type == 'Conférence' ? 'conference' : $type;

        return view("page/blogs/list", compact('list', 'type', 'years', 'count', 'title'));
    }

    public function detail(string $type, int $id)
    {
        if (!in_array($type, $this->types)/*!view()->exists("page/blogs/{$type}")*/) {
            return view("notfound");
        }

        $model = $this->_context->find($id);

        if ($model == null) {
            return view("notfound");
        }

        $images = explode(";", $model->imageUrl);
        array_pop($images);

        // return view("page/blogs/detail-{$name}", compact('model', 'name'));
        return view("page/blogs/detail", compact('model', 'type', 'images'));
    }
}
