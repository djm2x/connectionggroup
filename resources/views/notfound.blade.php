@extends('master')

@section('entete')
@stop

@section('titre')
@stop

@section('titre_contenu')
@stop

@section('content')
{{-- <div class="mt-2">
    <h1>page n'exsite pas</h1>
    <a href="{{ route('home') }}"> Vers accueil</a>
</div> --}}

<section class="president">
    <div class="container mt-5 mb-5 mt-5">
        <div class="d-flex flex-wrap justify-content-center align-items-center">
            {{-- <div class="col-md-6 mb-2">
                <img src="{{url('presidents/'.str_replace(';', '', $model->imageUrl))}}"
                class="card-img-top" alt="..." style="width: 20vw">
            </div> --}}
            <div class="col-md-12">
                <p class="text-uppercase">404</p>
                <h2>Page non trouvée</h2>
                <p>L'URL ou le contenu cherché n'existe pas ou a été supprimés ou externalisés</p>
                <div class="d-flex flex-row-reverse mt-2">
                    <a href="{{ route('home') }}"><span>Vers accueil</span></a>
                </div>
            </div>
        </div>

    </div>
</section>
@stop


@section('pied_page')
@stop
