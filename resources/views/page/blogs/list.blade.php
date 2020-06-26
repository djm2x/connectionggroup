@extends('master')


@section('title')
{{ preg_replace('/(?<!\ )[A-Z]/', ' $0', $type)}}
@stop
@section('content')
    {{-- {{$list}} --}}

    <section class="region">

        <div class="container flex-column d-flex justify-content-center align-items-center">
            <div class="d-flex justify-content-center align-items-center ml-auto mt-5  mb-5">
                <span>Filtrer par : &nbsp;&nbsp;</span>
                <select class="form-control" id="year" style="width:100px">
                    <option value="0">Année</option>
                    @foreach($years as $e)
                        <option value="{{$e->year}}">{{$e->year}}</option>
                    @endforeach
                </select>
            </div>


            <div class="d-flex justify-content-center align-items-center flex-wrap p-2 mt-5 w-100">
                <div class="col-md-12"  id="blogList">
                @foreach($list as $e)
                    <div class="row">
                        <div class="col-md-5">
                            <img src="{{url($type .'/'.str_replace(';', '', $e->imageUrl))}}"
                            onerror="this.onerror=null;this.src='/images/404.png';" class="w-100" style="height: 180px;">
                        </div>
                        <div class="col-md-7">
                            <p style="font-size: 1.2em">{{$e->title}}</p>
                        </div>
                    </div>

                    <div class="d-flex flex-row-reverse mt-5  mb-2">
                        <a href="{{url('blogs/'.$type.'/'.$e->id)}}   "><span style="font-size: 1.1em;">Continue a Lire</span></a>
                    </div>
                    <hr>
                @endforeach
                </div>
            </div>

            {{-- this template give s you a function {onPageChange(pageIndex, pageSize)} and a variable to change {count}--}}
            @include('pagination', ['count' => $count])
        </div>
    </section>
@stop



@section('scripts')
    <script>
        const type = {!! json_encode($type) !!};

        get('#year').addEventListener('change', () => {
            console.log(pageIndex, +get('#pageSize').value, type, +get('#year').value)

            onPageChange(pageIndex, +get('#pageSize').value, type, +get('#year').value)
        } );

        /**
         * @param {number} pageIndex
         * @param {number} pageSize
         */
        async function onPageChange(pageIndex, pageSize) {
            // console.log(pageIndex, pageSize)
            const startIndex = pageIndex * pageSize;
            get('#blogList').innerHTML = spinner;

            try {
                const r = await axios.get(`/api/blogs/pageApi/${startIndex}/${pageSize}/${type}/${+get('#year').value}`);
                const list = r.data.list;

                get('#count').innerHTML = r.data.count;

                // console.log(r)
                if (list) {
                    get('#blogList').innerHTML = render(list);
                }

            } catch (e) {
                e.response?.data ? console.warn(e.response?.data) : console.warn(e);
            }
        }

        /**
         * @param {Array} data
         * @returns {string}
         */
        function render(data) {
            let html = '';
            data.forEach((e, i) => {
                html +=
                    `
                    <div class="row">
                        <div class="col-md-5">
                            <img src="${type}/${e.imageUrl?.replace(';', '')}"
                            onerror="this.onerror=null;this.src='/images/404.png';" class="w-100" style="height: 180px;">
                        </div>
                        <div class="col-md-7">
                            <p style="font-size: 1.2em">${e.title}</p>
                        </div>
                    </div>

                    <div class="d-flex flex-row-reverse mt-2  mb-2">
                        <a href="/blogs/${type}/${e.id}"><span style="font-size: 1.1em;">Continue a Lire</span></a>
                    </div>
                `;
            });

            return html;
        }
    </script>
@stop
