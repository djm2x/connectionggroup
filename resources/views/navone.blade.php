<section class="navthree d-flex fixed-top"   style="z-index: 99999 !important;">
    <div class="container  align-items-center">
        <nav class="navbar navbar-expand-lg  h-100" >
            <a class="navbar-brand" href="{{ route('home') }}">
                <img src="{{ asset('images/logo.png') }}" style="width:150px" alt="connectiong-groupe">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="{{ request()->is('/') ? 'nav-link home active' : 'nav-link home' }}" href="{{ route('home') }}">Accueil</a>
                    </li>

                    <li class="nav-item dropdown">
                        {{-- class="{{ request()->is('article/*') ? 'nav-link dropdown-toggle active' : 'nav-link dropdown-toggle' }}" --}}
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            A PROPOS
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="{{ request()->is('article/president') ? 'dropdown-item active' : 'dropdown-item' }}" href="{{ url('article/president') }}">	Mot de la Présidente</a>
                            <div class="dropdown-divider"></div>
                            <a class="{{ request()->is('article/notre-mission') ? 'dropdown-item active' : 'dropdown-item' }}" href="{{ url('article/notre-mission') }}">Notre Mission</a>
                            <div class="dropdown-divider"></div>
                            <a class="{{ request()->is('article/cible') ? 'dropdown-item active' : 'dropdown-item' }}" href="{{ url('article/cible') }}">Notre cible</a>
                            <div class="dropdown-divider"></div>
                            <a class="{{ request()->is('article/organigramme') ? 'dropdown-item active' : 'dropdown-item' }}" href="{{ url('article/organigramme') }}">Organigramme</a>
                            <div class="dropdown-divider"></div>
                            <a class="{{ request()->is('article/membres') ? 'dropdown-item active' : 'dropdown-item' }}" href="{{ url('article/membres') }}">	Membres du bureau</a>
                            <div class="dropdown-divider"></div>
                            <a class="{{ request()->is('blogs/nationales') ? 'dropdown-item active' : 'dropdown-item' }}" href="{{ url('blogs/nationales') }}">Sections nationales</a>
                            <div class="dropdown-divider"></div>
                            <a class="{{ request()->is('blogs/intrenationales') ? 'dropdown-item active' : 'dropdown-item' }}" href="{{ url('blogs/intrenationales') }}">Sections intrenationales</a>
                            <div class="dropdown-divider"></div>
                            <a class="{{ request()->is('article/commissions') ? 'dropdown-item active' : 'dropdown-item' }}" href="{{ url('article/commissions') }}">Commissions</a>
                        </div>
                    </li>

                    <li class="nav-item">
                        <a class="{{ request()->is('article/realisations') ? 'nav-link active' : 'nav-link' }}" href="{{ url('article/realisations') }}">Réalisations</a>
                    </li>

                    <li class="nav-item">
                        <a class="{{ request()->is('blogs/activites') ? 'nav-link active' : 'nav-link' }}" href="{{ url('blogs/activites') }}">Activités</a>
                    </li>
                    <li class="nav-item">
                        <a class="{{ request()->is('galerie') ? 'nav-link active' : 'nav-link' }}" href="{{ route('galerie') }}">Galerie</a>
                    </li>

                    {{-- <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Formation
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="{{ request()->is('blogs/formationAgadir') ? 'dropdown-item active' : 'dropdown-item' }}" href="{{ url('blogs/formationAgadir') }}">Formation région Agadir</a>
                            <div class="dropdown-divider"></div>
                            <a class="{{ request()->is('blogs/formationCasablanca') ? 'dropdown-item active' : 'dropdown-item' }}" href="{{ url('blogs/formationCasablanca') }}">Formation région Casablanca</a>
                            <div class="dropdown-divider"></div>
                            <a class="{{ request()->is('blogs/formationFes') ? 'dropdown-item active' : 'dropdown-item' }}" href="{{ url('blogs/formationFes') }}">Formation région Fès</a>
                            <div class="dropdown-divider"></div>
                            <a class="{{ request()->is('blogs/formationMarrakech') ? 'dropdown-item active' : 'dropdown-item' }}" href="{{ url('blogs/formationMarrakech') }}">Formation région Marrakech</a>
                            <div class="dropdown-divider"></div>
                            <a class="{{ request()->is('blogs/formationMeknes') ? 'dropdown-item active' : 'dropdown-item' }}" href="{{ url('blogs/formationMeknes') }}">Formation région Meknès</a>
                            <div class="dropdown-divider"></div>
                            <a class="{{ request()->is('blogs/formationRabat') ? 'dropdown-item active' : 'dropdown-item' }}" href="{{ url('blogs/formationRabat') }}">Formation région Rabat-Kénitra</a>
                            <div class="dropdown-divider"></div>
                            <a class="{{ request()->is('blogs/formationTanger') ? 'dropdown-item active' : 'dropdown-item' }}" href="{{ url('blogs/formationTanger') }}">Formation région Tanger</a>
                        </div>
                    </li> --}}

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Media
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="{{ request()->is('blogs/press') ? 'dropdown-item active' : 'dropdown-item' }}" href="{{ url('blogs/press') }}">Press</a>
                            <div class="dropdown-divider"></div>
                            <a class="{{ request()->is('blogs/communiques') ? 'dropdown-item active' : 'dropdown-item' }}" href="{{ url('blogs/communiques') }}">Communiqués</a>
                            <div class="dropdown-divider"></div>
                            <a class="{{ request()->is('blogs/interviews') ? 'dropdown-item active' : 'dropdown-item' }}" href="{{ url('blogs/interviews') }}">Interviews</a>
                            {{-- <div class="dropdown-divider"></div>
                            <a class="{{ request()->is('blogs/conferenceNationale') ? 'dropdown-item active' : 'dropdown-item' }}" href="{{ url('blogs/conferenceNationale') }}">Conférence nationale</a>
                            <div class="dropdown-divider"></div>
                            <a class="{{ request()->is('blogs/conferenceRegionale') ? 'dropdown-item active' : 'dropdown-item' }}" href="{{ url('blogs/conferenceRegionale') }}">Conférence régionale</a> --}}
                        </div>
                    </li>

                    <li class="nav-item">
                        <a class="{{ request()->is('contact') ? 'nav-link active' : 'nav-link' }}" href="{{ route('contact') }}">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</section>
