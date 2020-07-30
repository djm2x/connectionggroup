@extends('master')


@section('title')
{{-- {{ preg_replace('/(?<!\ )[A-Z]/', ' $0', $title)}} --}}
{{  $title}}
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
                            <img src="{{url('blogs/'.$e->id.'/'.substr($e->imageUrl, 0, strpos($e->imageUrl, ";")) )}}"
                            onerror="this.onerror=null;this.src='/images/404.png';" class="w-100" style="height: 180px;">
                        </div>
                        <div class="col-md-7">
                        <p style="font-size: 1.2em">{{$e->title}}</p>
                        <p style="font-style: italic; font-size: .9em" class="text-muted mb-5 mt-2">
                            Le {{date('d-m-Y', strtotime($e->date))}}
                            {{-- Le {{$e->date->format('Y-m-d H:i:s')}} --}}

                            
                        </p>
                            {{-- <p style="font-size: .9em">{{str_replace('&nbsp;',' ',substr(strip_tags($e->description),0,1000))}}</p> --}}
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

                // console.warn(r)

                get('#count').innerHTML = r.data.count;

                // console.log(r)
                if (list) {
                    get('#blogList').innerHTML = render(list);
                }

            } catch (e) {
                e.response && e.response.data ? console.warn(e.response.data) : console.warn(e);
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
                            <img src="/blogs/${e.id}/${e.imageUrl.substring(0, e.imageUrl.indexOf(';'))}"
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

        //
        function handleImage(imageUrl = '') {
            return imageUrl.substring(0, imageUrl.indexOf(';'));
        }
    </script>
@stop
