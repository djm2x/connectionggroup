<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Routing\UrlGenerator;
use Illuminate\Support\Facades\URL;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // $this->app->singleton(Uow::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(/*UrlGenerator $url*/)
    {
        //
        if(env('APP_ENV') !== 'local')
        {
        }
        // URL::forceScheme('https');

        // dd(env('APP_ENV'));
        // dd($rr);

        // if(config('app.env') === 'production') {
        // }

    }
}
