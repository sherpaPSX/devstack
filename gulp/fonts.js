var gulp = require('gulp');

module.exports = function () {
  gulp.src('./assets/fonts/*')
      .pipe(gulp.dest('./dist/fonts/'));
};
