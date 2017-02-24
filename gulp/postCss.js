var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var emMediaQuery = require('postcss-em-media-query');
var postcss = require('gulp-postcss');
var cssnano = require('cssnano');
var rename = require("gulp-rename");

module.exports = function () {
    var processors = [
        autoprefixer({browsers: ['> 1%']}),
        emMediaQuery(),
        cssnano()
    ];
    gulp.src('./dist/css/main.css')
        .pipe(rename('main.min.css'))
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dist/css/'));
};
