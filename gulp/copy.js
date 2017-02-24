var gulp = require('gulp');
var gulpCopy = require('gulp-copy');
var rename = require("gulp-rename");

module.exports = function () {
  gulp.src('node_modules/flexboxgrid/css/flexboxgrid.css')
    .pipe(rename('flexboxgrid.scss'))
    .pipe(gulp.dest('./assets/sass/vendor/'));
  gulp.src('node_modules/sanitize.css/sanitize.css')
    .pipe(rename('sanitize.scss'))
    .pipe(gulp.dest('./assets/sass/vendor/'));
  gulp.src('./assets/fonts/*')
    .pipe(gulp.dest('./dist/fonts/'));
};
