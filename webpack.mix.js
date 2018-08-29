let mix = require('laravel-mix');
require('laravel-mix-tailwind');
require('laravel-mix-purgecss');

mix
    .js('src/js/styleguide.js', 'dist/')
    .sass('src/scss/styleguide.scss', 'dist/')
    .tailwind()
    .copyDirectory('dist', 'example')
    .browserSync({
      proxy: 'http://styleguide.test',
      files: ['example/**']
    });

if (mix.inProduction()) {
  mix
    .purgeCss({
      enabled: true,
      globs: [
        'example/**/*.php',
        'dist/**/*.js'
      ],
      whitelistPatterns: [/^prism/],
      extensions: ['html', 'js', 'php']
    });
}