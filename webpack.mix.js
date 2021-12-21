const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .styles([
        'resources/sass/utils/argon.scss',
        'resources/sass/utils/nucleo.scss',
        'resources/sass/components/NavBarComponent.scss',
        'resources/sass/components/FileComponent.scss',
        'resources/sass/style_untels.scss',
    ], 'public/css/all.css');

mix.disableNotifications();
