var Builder = require('systemjs-builder');

var builder = new Builder('./', './jspmConfig.js');

console.log('buildling...');

builder
  .buildStatic('./src/index.js', './dist/main.0.0.1.min.js', {
    minify: true,
    sourceMaps: false
  })
  .then(function() {
    console.log('build success');
  })
  .catch(function(e) {
    console.log('build failed');
    console.error(e.stack);
  });
