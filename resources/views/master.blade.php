<!DOCTYPE html>
<html>

<head>
    @yield('entete')
    <title> @yield('titre') </title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    {{-- <link href="css/app.css" rel="stylesheet"> --}}

    @yield('styles')
</head>

<body>
    <div id="haut"></div>
    <header id="entete">
        @include('navone')
    </header>

    <main class="main">
        {{-- <i  class="fas fa-home d-none d-md-block"></i>
        <span class="d-sm-none">Accueil</span> --}}
        <div class="d-none d-md-block">
            @include('carousel')
        </div>
        <section class="container">
            <div class="row">
                <div class="col-sm-12 col-md-8">
                    <h1 class="mt-4 text-capitalize">@yield('title')</h1>
                    @yield('content')
                </div>

                <div class="col-sm-12 col-md-4">
                    @include('sidenav')
                </div>
            </div>
        </section>
    </main>

    <footer>
        @include('footer')
    </footer>

    <a id="btn" class="d-flex justify-content-center align-items-center">
        {{-- <i class="fas fa-arrow-up text-white"></i> --}}
        <i class="fa fa-arrow-up text-white" aria-hidden="true"></i>

    </a>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>
    {{-- <script src="js/app.js"></script> --}}
    @yield('scripts-sidenav')
    @yield('scripts')
    <script>
        document.querySelector('#btn').addEventListener('click', () => {
            document.querySelector('#haut').scrollIntoView({block: 'end', inline: 'nearest', behavior: 'smooth'})
        });
    </script>

</body>

</html>
