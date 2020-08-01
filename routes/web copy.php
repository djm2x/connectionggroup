<?php
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\View;


//home
Route::get('', 'HomeController@index')->name('home');

// a propos
Route::get('/article/{name}', 'ArticleController@page');

Route::get('/blogs/formation/{startIndex}/{pageSize}/{year}', 'BlogController@formation')->name('formation');
Route::get('/blogs/conference/{startIndex}/{pageSize}/{year}', 'BlogController@conference')->name('conference');
Route::get('/blogs/divers/{startIndex}/{pageSize}/{year}', 'BlogController@divers')->name('divers');

Route::get('/blogs/{type}/{id}', 'BlogController@detail');
// Route::get('/blogs/intrenationales', 'BlogController@list')->name('intrenationales');

// realisation
// Route::get('/article/realisations', 'ArticleController@realisations')->name('realisations');
// activites
// Route::get('/activite', 'ActiviteController@list')->name('activite');
// Route::get('/activite/{id}', 'ActiviteController@detail')->name('detail-activite');

//galerie
Route::get('/galerie', 'GalerieController@list')->name('galerie');
Route::get('/galerie-test', 'GalerieController@test')->name('galerie-test');
Route::get('/detail-galerie/{id}', 'GalerieController@detail')->name('detail-galerie');

// media
// Route::get('/press', 'PresidentController@list')->name('press');
// Route::get('/communiques', 'PresidentController@list')->name('communiques');
// Route::get('/interviews', 'PresidentController@list')->name('interviews');

Route::get('/contact', 'ContactController@create')->name('contact');

// sidenav
Route::get('/news', 'BlogController@show')->name('news');
Route::get('/news/{id}', 'BlogController@show')->name('detail');

Route::get('/agenda', 'BlogController@show')->name('news');
Route::get('/agenda/{id}', 'BlogController@show')->name('detail');

Route::get('/phpinfo', function() {
    return phpinfo();
});


Route::fallback(function (string $route) {

    if(begnWith($route, "admin") || begnWith($route, "auth")) {
        return View::make('index');
    }

    // return redirect('');
    // return view("notfound");
});


function begnWith($str, $begnString) {
    $len = strlen($begnString);
    return (substr($str, 0, $len) === $begnString);
}

