
 <style>
    .date {
        position: relative;
    }

    .date::before {
        content: '';
        /* background-image: url('images/dashed.png'); */
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: -1;
    }

    .init-ancre {
        color: #000000;
        text-decoration: none;
        /* background-color: transparent; */
    }
    .init-ancre:hover {
        color: #000000;
        text-decoration: none;
    }
 </style>


<section class="sidenav">
    @if (request()->is('/'))
    <section class="login bg-light mb-2 mt-2 p-2 d-flex justify-content-between align-items-center"
    style="background: #f3f3f3  !important; ">
       <p class="h5 m-0">Espace Membre</p>
       {{-- <button class="btn btn-primary">S'Authentifier</button> --}}
       <a class="btn btn-primary" href="/auth/login">S'Authentifier</a>
   </section>

   <section class="sigin bg-light mb-2 mt-2 p-2  d-flex justify-content-between align-items-center"
    style="background: #f3f3f3  !important; ">
       <p class="h5 m-0">Devenir Membre</p>
       {{-- <button class="btn btn-primary">S'Inscrire</button> --}}
       <a class="btn btn-primary" href="/auth/login">S'Inscrire</a>
   </section>
    @endif


    <section class="news pt-2 pb-2">
        <div class="card w-100" style="border-radius: 0">
            <div class="card-body">
                <h5 class="card-title"><a class="text-dark" href="/blogs/news">News</a></h5>
                <h6 class="card-subtitle mb-2" style="width: 30%">
                    <hr class="m-0">
                    <hr class="m-0">
                    <hr class="m-0">
                </h6>
                <div id="newsTopThree" class="d-flex flex-column justify-content-between align-items-center">

                </div>
            </div>
        </div>
    </section>

    <section class="agenda pt-2 pb-2">
        <div class="card w-100" style="border-radius: 0">
            <div class="card-body">
            <h5 class="card-title"><a class="text-dark" href="/blogs/agenda">Agenda</a></h5>
                <h6 class="card-subtitle mb-2" style="width: 30%">
                    <hr class="m-0">
                    <hr class="m-0">
                    <hr class="m-0">
                </h6>
                <div id="agendaTopThree" class="d-flex flex-column justify-content-between align-items-center">

                </div>
            </div>
        </div>
    </section>

    <section class="newsLetter pt-2 pb-2">
        <div class="card w-100" style="border-radius: 0">
            <div class="card-body">
            <h5 class="card-title">NewsLetter</h5>
                <h6 class="card-subtitle mb-2" style="width: 30%">
                    <hr class="m-0">
                    <hr class="m-0">
                    <hr class="m-0">
                </h6>
                <div class="">
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                          <div class="input-group-text">@</div>
                        </div>
                        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username">
                        <div class="input-group-prepend">
                            <button class="btn btn-primary">Ok</button>
                          </div>
                      </div>
                </div>
            </div>
        </div>
    </section>

</section>
@section('scripts-sidenav')
<script>
    const spinner = `<div class="spinner-border text-success m-5" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>`;

    window.addEventListener("DOMContentLoaded", () => {
        console.log('DOMContentLoaded')
        getPage('newsTopThree', 'news');
        getPage('agendaTopThree', 'agenda');
    });

    async function getPage(context, type) {
        get(`#${context}`).innerHTML = spinner;

        try {
            const r = await axios.get(`/api/blog/${context}`);
            const list = r.data.list;

            console.log(list)

            if (list) {
                get(`#${context}`).innerHTML = '';
                get(`#${context}`).innerHTML = populate(list, type);
            }

        } catch (e) {
            // try {
            //     e.response?.data ? console.warn(e.response?.data) : console.warn(e);
            // } catch (error) {
            // }
            console.warn(e)

        }
    }

    /**
     * @param {date: Date, titre: string}[] data
     * @returns {void}
     */
    function populate(data, type) {
        let html = ''
        data.forEach((e, i) => {
            html +=
                `<div class="d-flex align-items-center w-100 p-1">
                    <div class="col-3 col-md-3 date d-flex flex-column justify-content-between align-items-center">
                        <p class="h3 m-0 font-weight-bold" style="z-index: 3;">${new Date(e.date).getDate()}</p>
                        <p class="m-0 text-muted" style="z-index: 3; font-size:.8em; white-space: nowrap;">
                            ${new Date(e.date).toLocaleString('default', { month: 'long' })}, ${new Date(e.date).getFullYear()}
                        </p>
                    </div>
                    <div class="col-9 col-md-9 pr-0">
                        <a class="init-ancre" href="/blogs/${type}/${e.id}""><p class="m-0">${e.title.substring(0, 60)}..</p></a>
                    </div>
                </div>
                `;
        });

        return html;
    }

    /**
     * @returns {ParentNode} element
     */
    function get(selector) {
        return document.querySelector(selector)
    }
</script>
@stop
