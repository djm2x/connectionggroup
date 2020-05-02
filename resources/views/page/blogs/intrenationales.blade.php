@extends('master')

@section('entete')
@stop


@section('title')
    {{-- <h1>{{$model->title}}</h1> --}}
@stop

@section('content')
<section class="president">
    <div class="container mt-5 mb-5 mt-5">
        <div class="d-flex flex-wrap justify-content-center align-items-center">
            {{-- <div class="col-md-6 mb-2">
                <img src="{{url('presidents/'.str_replace(';', '', $model->imageUrl))}}"
                class="card-img-top" alt="..." style="width: 20vw">
            </div> --}}
            <div class="col-md-12">
                <p class="text-uppercase">À PROPOS</p>
                @foreach ($list as $e)
                <div class="d-flex mb-3">
                    <div class="mr-2" >
                        <img src="{{url('blogs/'.str_replace(';', '', $e->imageUrl))}}" onerror="this.onerror=null;this.src='/images/404.png';"
                            style="width:60px" alt="{{$e->title}}">
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                        {!! $e->description !!}
                    </div>
                </div>
                @endforeach
            </div>
        </div>
    </div>
</section>
@stop
