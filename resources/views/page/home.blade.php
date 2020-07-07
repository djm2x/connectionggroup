@extends('master')


@section('title')
{{ $model->title }}
@stop

@section('content')
<div class="hommee">
    <div class="mt-2">
        {{-- <h1>{{$model->title}}</h1> --}}

        <section>
            {!! substr($model->description, 0, 500) !!}...
        </section>


        <div class="d-flex flex-row-reverse mt-5">
            <a href="{{ url('article/presentation') }}"<span>Continue a Lire</span></a>
        </div>
    </div>

    <div class="d-flex flex-column w-100 mt-5" style="background: #efefef;">
        <div class="p-2">
            <h5>NOS PARTENAIRES :</h5>
            <div class="d-flex flex-wrap">
                @for ($i = 1; $i <= 5; $i++)
            <img style="width: {{$i != 5 ? '100px' : '200px'}}" class="p-1" src="images/p{{$i}}.png" alt="">
                @endfor
            </div>
        </div>
    </div>



</div>
@stop


