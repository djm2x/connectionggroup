<section class="first">
    <div id="carouselExampleCaptions" class="carousel slide " data-ride="carousel">
        {{-- <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol> --}}

        <div class="carousel-inner ">
            @for ($i = 1 ; $i <= 6 ; $i++)
                <div class="{{ $i == 1 ? 'carousel-item active' : 'carousel-item' }}">
                    <img src="{{ asset('images/'. $i .'.png') }}" class="d-block w-100" alt="...">

                    <div class="carousel-caption d-none d-md-block">
                    {{-- <h1>ON EST PLUS QU'AMIS</h1>
                    <h5>On est donneurs de song</h5>

                    <a class="btn btn-primary mt-5 " href="http://">REJOIGNEZ-NOUS SUR FACEBOOK</a> --}}
                    </div>
                </div>
            @endfor
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

</section>

