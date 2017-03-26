var minifier = require('minifier');
var input = './dist';

minifier.on('error', function (err) {
    // handle any potential error
});

let files = [
    'inline.bundle.js',
    'main.bundle.js',
    'polyfills.bundle.js',
    'styles.bundle.js',
    'vendor.bundle.js'
]

files.forEach(file => {
    minifier.minify(input + '/' + file, {output: input + '/' + file.substr(0, file.lastIndexOf('.')) + '.min.js'})
});