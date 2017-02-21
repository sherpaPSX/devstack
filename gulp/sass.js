var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var emMediaQuery = require('postcss-em-media-query');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var cssnano = require('cssnano');
var browserSync = require('browser-sync');
var rename = require("gulp-rename");

module.exports = function () {
    var processors = [
        autoprefixer({browsers: ['> 1%']}),
        emMediaQuery(),
        cssnano()
    ];
    gulp.src('./assets/sass/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(browserSync.stream());
    gulp.src('./dist/css/main.css')
        .pipe(rename('main.min.css'))
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dist/css/'));
};
