module.exports = {
  presets: [
    ['@vue/app', {
      baseUrl : './',
      polyfills: [
        'es6.promise',
        'es6.symbol'
      ],
    }]
  ]
}