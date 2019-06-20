const mix = require('laravel-mix')
mix.pug = require('laravel-mix-pug')

mix.babelConfig({
  'presets': ['@wordpress/babel-preset-default'],
  'plugins': [
    ['@babel/plugin-transform-react-jsx', {
      'pragma': 'createElement'
    }],
    'babel-plugin-inline-json-import',
  ]
})

mix.setResourceRoot('src')
mix.setPublicPath('dist')

mix.copy('src/scss', 'dist/scss')
mix.react('src/js/playground.js', 'dist/js/playground.js')
mix.pug('src/index.pug', '../dist')

mix.options({
  hmrOptions: {
    port: 8080,
  }
})