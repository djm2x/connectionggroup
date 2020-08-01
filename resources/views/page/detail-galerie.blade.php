@extends('master')

@section('title')
    Galerie d'images
@stop


@section('styles')
    <style>
        .fallback {
            background-color: #f1f5f8;
            height: 40vh;
            width: 50vw;
        }

        /* @media screen and (max-width: 844px) {
            .fallback {
                height: 800px;
            }
        } */
    </style>
@stop

@section('content')
<section class="galerie">

    {{-- <div class="wallpaper" >
        <div class="para d-flex flex-column align-items-center mt-3">
            <p class="text-danger text-uppercase h2 font-weight-bold anime">Galerie d'images</p>

            <div class="progress">
                <div class="progress-bar bg-danger" role="progressbar"style="height:50vh;"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
        </div>
    </div> --}}


    <div class="container p-0 my-2">
        <div class="row d-flex p-2 ml-2" style="">
            <p style="font-size: 1.2em">{{$model->title}}</p>
            <p style="font-style: italic; font-size: .9em" class="text-muted mt-2">
                Le {{date('d-m-Y', strtotime($model->date))}} <b>({{$model->type}})</b>
            </p>
        </div>
        <div id="carouselExampleCaptions4" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner ">
                @foreach ($images as $e)
                    <div class="{{$loop->iteration == 1 ? 'carousel-item active' : 'carousel-item'}}" style="height: 60vh;">
                        <div class="d-block w-100 fallback"  style="height: 60vh;"></div>
                        <div class="carousel-caption  d-none d-md-block d-flex flex-column justify-content-center align-items-center"  style="height: 60vh;">
                            <div class="row d-flex justify-content-center align-items-center h-100 p-2">

                                    <div class="card col-md-12 p-0">
                                            <img src="{{url('blogs/'.$model->id.'/'.$e)}}" onerror="this.onerror=null;this.src='/images/404.png';"
                                                class="card-img-top"  style="height: 57vh" alt="{{$e}}">
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
    </div>
</section>
@stop

@section('scripts')
    <script> </script>
@stop
