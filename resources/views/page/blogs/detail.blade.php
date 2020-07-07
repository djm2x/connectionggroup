@extends('master')

@section('entete')
@stop


@section('title')
{{ $model->title }}
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
                {{-- <p class="text-uppercase">{{$type}}</p> --}}
                <div id="carouselExampleCaptions4" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner " style="background-color: rgb(212, 212, 212);">
                        @foreach ($images as $e)
                            <div class="{{$loop->iteration == 1 ? 'carousel-item active' : 'carousel-item'}}" style="height: 60vh;">
                                {{-- <div class="d-block w-100 fallback"  style="height: 60vh;"></div> --}}
                                <div class="carousel-caption  d-none d-md-block d-flex flex-column justify-content-center align-items-center"  style="height: 60vh;">
                                    <div class="row d-flex justify-content-center align-items-center h-100 p-2">

                                            <div class="card col-md-12 p-0">
                                                    <img src="{{url('blogs/'.$e)}}" onerror="this.onerror=null;this.src='/images/404.png';"
                                                        class="card-img-top"  style="height: 35vh" alt="{{$e}}">
                                            </div>

                                    </div>
                                </div>
                            </div>
                        @endforeach
                    <a class="carousel-control-prev" href="#carouselExampleCaptions4" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleCaptions4" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                    </div>
                </div>


                {{-- <h2>{{ $model->title }}</h2> --}}
                <p style="font-style: italic; font-size: .9em" class="text-muted mb-5">Le {{date('d-m-Y', strtotime($model->date))}}</p>
                {!! $model->description !!}
            </div>
        </div>

    </div>
</section>
@stop
