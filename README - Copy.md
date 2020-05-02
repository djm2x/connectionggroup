jwt 
composer require tymon/jwt-auth:dev-develop --prefer-source
php artisan vendor:publish
Provider: Tymon\JWTAuth\Providers\LaravelServiceProvider
php artisan jwt:secret

karnel

protected $routeMiddleware = [
    'auth.jwt'  =>  \Tymon\JWTAuth\Http\Middleware\Authenticate::class, // JWT middleware
];

route/api
Route::group(['middleware' => 'auth.jwt'], function () {
    Route::get('logout', 'ApiController@logout');
});

use Tymon\JWTAuth\Contracts\JWTSubject;
class User extends Authenticatable implements JWTSubject

