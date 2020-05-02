<?php

namespace App\Http\Controllers;
use App\User;

class UserController extends SuperController
{
    public function __construct(User $model)
    {
        parent::__construct($model);
    }

    public function getAll(int $startIndex, int $pageSize, string $sortBy, string $sortDir) // : Collection
    {
        $list = $this->_context
            // ->where('idCircuit', $id)
            // ->where('idCircuit', 'LIKE', "%{$value}%")
            ->orderBy($sortBy, $sortDir)
            ->skip($startIndex)
            ->take($pageSize)
            ->with('region')
            ->get()
            ;

        $count = $this->_context->get()->count();

        return ['list' => $list, 'count' => $count];
    }
}
