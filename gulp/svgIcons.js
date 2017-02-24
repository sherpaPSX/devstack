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


// TODO
//
// var svgSprite = require("gulp-svg-sprites");
// var filter    = require('gulp-filter');
// var svg2png   = require('gulp-svg2png');
//
// gulp.task('sprites', function () {
//     return gulp.src('assets/svg/*.svg')
//         .pipe(svgSprite())
//         .pipe(gulp.dest("assets")) // Write the sprite-sheet + CSS + Preview
//         .pipe(filter("**/*.svg"))  // Filter out everything except the SVG file
//         .pipe(svg2png())           // Create a PNG
//         .pipe(gulp.dest("assets"));
// });
//
