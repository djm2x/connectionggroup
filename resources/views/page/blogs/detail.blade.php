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
                <p class="text-uppercase">{{$type}}</p>


                <h2>{{ $model->title }}</h2>
                <p style="font-style: italic; font-size: .9em" class="text-muted mb-5">Le {{date('d-m-Y', strtotime($model->date))}}</p>
                {!! $model->description !!}
            </div>
        </div>

    </div>
</section>
@stop
