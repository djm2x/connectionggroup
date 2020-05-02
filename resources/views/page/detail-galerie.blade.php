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


    <div class="container">
        <div class="row d-flex justify-content-center p-2" style="">

        </div>
        <div id="carouselExampleCaptions4" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner ">
            @foreach ($images as $e)
                <div class="{{$loop->iteration == 1 ? 'carousel-item active' : 'carousel-item'}}">
                    <div class="d-block w-100 fallback"></div>
                    <div class="carousel-caption  d-none d-md-block d-flex flex-column justify-content-center align-items-center">
                        <div class="row d-flex justify-content-center p-2">
                            <div class="d-flex justify-content-center">
                                <div class="card col-md-12 p-0">
                                        <img src="{{url('galeries/'.$model->id.'/'.$e)}}" onerror="this.onerror=null;this.src='/images/404.png';"
                                            class="card-img-top w-100"  style="height: 30vh" alt="{{$e}}">
                                </div>
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
