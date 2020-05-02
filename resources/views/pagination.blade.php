<section class="">
    <div class="d-flex justify-content-center align-items-center mb-5">
        <span class="d-none d-md-block">element par page&nbsp;:&nbsp;</span>
        <select class="form-control" id="pageSize" style="width:75px">
            <option value="6">6 </option>
            <option value="12">12 </option>
            <option value="24">24 </option>
            <option value="50">50 </option>
            <option value="100">100 </option>
        </select>

        <span class="d-flex ml-2 mr-4">
            <span id="startIndex"></span>&nbsp;-&nbsp;<span id="endIndex"></span>&nbsp;sur&nbsp;<span id="count"></span>
        </span>

        <nav class="d-flex justify-content-center align-items-center">
            <ul class="pagination mb-0">
                <li class="page-item">
                    <a id="first" class="page-link"><i class="fa fa-angle-double-left"></i></a>
                </li>

                <li class="page-item">
                    <a id="previous" class="page-link"><i class="fa fa-angle-left"></i></a>
                </li>

                <li class="page-item">
                    <a id="next" class="page-link"><i class="fa fa-angle-right"></i></a>
                </li>

                <li class="page-item">
                    <a id="last" class="page-link"><i class="fa fa-angle-double-right"></i></a>
                </li>
            </ul>
        </nav>
    </div>

</section>

<script>
    const ct = {!! json_encode($count) !!};;
    let pageIndex = 0;
    // endIndex = (startIndex + pageSize > count) ? (count) : (startIndex + pageSize);
    get('#startIndex').innerHTML = 1;
    get('#count').innerHTML = ct;
    get('#endIndex').innerHTML = (6 > ct) ? (ct) : (6);

    // console.log('>>>>>>>>>>>>>', get('#count').innerHTML)

    get('#pageSize').addEventListener('change', () => onPageChange(pageIndex, +get('#pageSize').value));

    get('#first').addEventListener('click', () => {
        if (pageIndex === 0) return;

        pageIndex = 0;
        updateIndexs(pageIndex, +get('#pageSize').value, +get('#count').innerHTML);
        onPageChange(0, +get('#pageSize').value);
    });

    get('#previous').addEventListener('click', () => {
        if (pageIndex === 0) return;

        pageIndex--;
        updateIndexs(pageIndex, +get('#pageSize').value, +get('#count').innerHTML);
        onPageChange(pageIndex, +get('#pageSize').value);
    });

    get('#next').addEventListener('click', () => {
        // console.log+get('#count').innerHTML, +get('#endIndex').innerHTML
        if (+get('#count').innerHTML === +get('#endIndex').innerHTML) return;

        pageIndex++;

        updateIndexs(pageIndex, +get('#pageSize').value, +get('#count').innerHTML);

        onPageChange(pageIndex, +get('#pageSize').value);
    });

    get('#last').addEventListener('click', () => {
        if (+get('#count').innerHTML === +get('#endIndex').innerHTML) return;

        pageIndex = parseInt(+get('#count').innerHTML / +get('#pageSize').value);

        updateIndexs(pageIndex, +get('#pageSize').value, +get('#count').innerHTML);

        onPageChange(pageIndex, +get('#pageSize').value);
    });



    function updateIndexs(pageIndex, pageSize, count) {
        const startIndex = pageIndex * pageSize
        get('#startIndex').innerHTML = startIndex + 1;
        get('#endIndex').innerHTML = (startIndex + pageSize > count) ? (count) : (startIndex + pageSize);
    }

    /**
     * @returns {ParentNode} element
     */
    function get(selector) {
        return document.querySelector(selector)
    }
</script>

