const mix = require('laravel-mix');
const path = require('path');

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .webpackConfig({
    output: { chunkFilename: 'js/[name].[contenthash].js' },
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.runtime.js',
        '@': path.resolve('resources/js'),
      },
    },
  }).vue();
