'use strict';
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

var paths = {
  sass: ['./sass/**/*.scss']
};

gulp.task('styles', function () {
    var processors = [
        autoprefixer({browsers: ['> 1%']}),
        cssnano(),
    ];
    return gulp.src('./sass/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(postcss(processors))
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['styles']);

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['styles']);
});
