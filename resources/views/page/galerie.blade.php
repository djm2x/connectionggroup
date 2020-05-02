@extends('master')

@section('title')
    Galerie d'images
@stop

@section('content')
<section class="galerie">
    {{-- <div class="wallpaper" >
        <div class="para d-flex flex-column align-items-center mt-3">
            <p class="text-danger text-uppercase h2 font-weight-bold anime">Galerie d'images</p>

            <div class="progress">
                <div class="progress-bar bg-danger" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
        </div>
    </div> --}}
    <div class="container">
        <div class="row d-flex justify-content-center p-2 mt-5">
            @foreach ($list as $e)
                <div  class="col-md-6 col-sm-6 col-lg-3 mb-3 d-flex justify-content-center">
                    <div class="card m-1" style="width: 18rem;cursor: pointer;">
                        <hr class="m-0">
                        <hr class="m-0">
                        <hr class="m-0">
                        <hr class="m-0">
                        <hr class="m-0">
                        <div class="card-body">
                        <p class="card-text m-0 text-dark font-weight-bold">{{$e->title}}</p>
                            <p class="card-text m-0 text-dark text-muted">
                                {{date('d-m-Y', strtotime($e->date))}}
                            </p>
                            <div class="d-flex d-flex flex-row-reverse mt-3">
                                <a class=" text-uppercase"  href="detail-galerie/{{$e->id}}">plus d'info...</a>
                            </div>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
  </div>
</section>
@stop

{{-- @section('scripts')
    <script>
        document.querySelector('.card-code').addEventListener('click', () => console.log('clicket'));

        // window.location.href = '/detail-galerie'
    </script>
@stop --}}
