var gulp = require('gulp');
var svgToSss = require('gulp-svg-to-css');

module.exports = function () {
  gulp.src('./assets/svg/icons/*')
    .pipe(svgToSss({
      name:'_svg-icons.scss',
      prefix: 'svg-icon-'
    }))
    .pipe(gulp.dest('./assets/sass/common/'));
};
