<?php

namespace App\Providers;

use Statamic\Statamic;
use Statamic\Facades\Form;
use Statamic\Facades\Fieldset;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        foreach (Form::all() as $form) {
            Form::redirect($form->handle, function ($submission) {
                return 'success';
            });
        }

        // Set CP Logo & Favicon
        Statamic::booted(function () {
            $logoUrl = Storage::disk('assets')->url('v1_logo.png');
            $faviconUrl = Storage::disk('assets')->url('v1_favicon.png');

            config()->set('statamic.cp.custom_logo_url', $logoUrl);
            config()->set('statamic.cp.custom_favicon_url', $faviconUrl);
        });

        Statamic::vite('app', [
            'resources/css/cp.css',
        ]);
    }
}
