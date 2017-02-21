'use strict';
var gulp = require('gulp');
var requireDir = require('require-dir');

// Tasks directory
var tasks = requireDir('./gulp');

// Development tasks
gulp.task('serve', tasks.browserSync); //BrowserSync
gulp.task('styles', tasks.sass); // SASS files, PostCSS, autoprefixer
gulp.task('svgImages', tasks.svgImages); // Svg images
gulp.task('svgIcons', tasks.svgIcons); // Svg images
gulp.task('images', tasks.images); // Images
gulp.task('javascript', tasks.javascript); // Images

// Build tasks
gulp.task('copy', tasks.copy); // Copy - flexboxgrid, sanitize
gulp.task('fonts', tasks.copy); // Fonts


gulp.task('default', ['serve', 'styles', 'svgImages', 'svgIcons', 'images', 'javascript']);
gulp.task('build', ['styles', 'svgImages', 'svgIcons', 'images', 'copy', 'fonts', 'javascript']);

gulp.task('watch', function() {
  gulp.watch('./sass/**/*.scss', ['styles'])
  gulp.watch('./assets/svg/*', ['svg']);
  gulp.watch('./assets/images/*', ['images']);
});
