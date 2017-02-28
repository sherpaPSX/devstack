// var gulp = require('gulp');
// var svgToSss = require('gulp-svg-to-css');
//
// module.exports = function () {
//   gulp.src('./assets/svg/icons/*')
//     .pipe(svgToSss({
//       name:'_svg-icons.scss',
//       prefix: 'svg-icon-'
//     }))
//     .pipe(gulp.dest('./assets/sass/common/'));
// };
//
//
//
var gulp = require('gulp');
var svgSprite = require("gulp-svg-sprites");
var filter    = require('gulp-filter');
var svg2png   = require('gulp-svg2png');

module.exports = function () {


  gulp.src('./assets/svg/icons/*.svg')
      .pipe(svgSprite({
          templates: { scss: true },
          preview: false,
          templates: { scss: true },
          selector: "icon-%f"
      }))
      .pipe(gulp.dest("dist/images/icons")) // Write the sprite-sheet + CSS + Preview
      .pipe(filter("**/*.svg"))  // Filter out everything except the SVG file
      .pipe(svg2png())           // Create a PNG
      .pipe(gulp.dest("dist/images/icons"));
};
