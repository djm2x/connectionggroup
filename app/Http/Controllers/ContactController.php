<?php

namespace App\Http\Controllers;

use App\Contact;
use Illuminate\Http\Request;

class ContactController extends SuperController
{
    public function __construct(Contact $model)
    {
        parent::__construct($model);
    }

    public function list()
    {
        $list = $this->_context->all();
        return view('page/contact', compact('list'));
    }

    public function create() {

        $model = new Contact();

        return view('page/contact', compact('model'));
    }


}
