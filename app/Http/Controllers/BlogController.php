<?php

namespace App\Http\Controllers;

use App\blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BlogController extends SuperController
{
    private $types = [
        "activites",
        "agenda",
        "communiques",
        // "conferenceNationale",
        // "conferenceRegionale",
        // "formationAgadir",
        // "formationCasablanca",
        // "formationFes",
        // "formationMarrakech",
        // "formationMeknes",
        // "formationRabat",
        // "formationTanger",
        "interviews",
        "news",
        "press",
        "intrenationales",
        "nationales"
    ];

    public function __construct(blog $model)
    {
        parent::__construct($model);
    }

    public function getAll(int $startIndex, int $pageSize, string $sortBy, string $sortDir) // : Collection
    {
        $list = $this->_context
            ->orderBy($sortBy, $sortDir)
            ->skip($startIndex)
            ->take($pageSize)
            ->get()
            ;

        $count = $this->_context->get()->count();

        return ['list' => $list, 'count' => $count];
    }

    public function newsTopThree() // : Collection
    {
        $list = $this->_context
            ->where('type', 'LIKE', "%news%")
            ->orderBy('date', 'desc')
            ->take(3)
            ->get()
            ;

        return ['list' => $list];
    }

    public function agendaTopThree() // : Collection
    {
        $list = $this->_context
            ->where('type', 'LIKE', "%agenda%")
            ->orderBy('date', 'desc')
            ->take(3)
            ->get()
            ;

        return ['list' => $list];
    }

    public function pageApi(int $startIndex, int $pageSize, string $type, int $year) // : Collection
    {
        // get blog of one type
        $q = $this->_context->where('type', 'LIKE', "%{$type}%");

        if ($type == 'activites') {
            $q->orWhere('type', 'LIKE', "%Activités%");
        }

        if ($type == 'communiques') {
            $q->orWhere('type', 'LIKE', "%communiqués%");
        }

        // filter blogs by years
        if ($year != 0) {
            $q->whereYear('date', '=' ,$year);
        }

        $count = $q->count();

        $list = $q->orderBy('date', 'desc')->skip($startIndex)->take($pageSize)->get();

        return ['list' => $list, 'count' => $count];
    }

    public function page(string $type) // : Collection
    {
        if (!in_array($type, $this->types)/*!view()->exists("page/blogs/{$type}")*/) {
            return view("notfound");
        }

        $q = $this->_context
            ->where('type', 'LIKE', "%{$type}%");

        if ($type == 'nationales' || $type == 'intrenationales' ) {
            $list = $q->get();
            return view("page/blogs/{$type}", compact('list'));
        }



        if ($type == 'activites') {
            $q->orWhere('type', 'LIKE', "%activités%");
        }

        if ($type == 'communiques') {
            $q->orWhere('type', 'LIKE', "%communiqués%");
        }



        $rawSql = env('DB_CONNECTION') == 'sqlite' ? "strftime('%Y', date) as year" : 'YEAR(date) as year';

        $count = $q->count();

        $q2 = clone($q);
        $years = $q2->select(DB::raw($rawSql))->distinct('year')->orderBy('date', 'desc')->get();

        $list = $q->orderBy('date', 'desc')->skip(0)->take(6)->get();



        // dd($years);

        // $years = array_unique ($years);

        return view("page/blogs/list", compact('list', 'type', 'years', 'count'));
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



        // return view("page/blogs/detail-{$name}", compact('model', 'name'));
        return view("page/blogs/detail", compact('model', 'type'));
    }
}
