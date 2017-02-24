'use strict';
var gulp = require('gulp');
var requireDir = require('require-dir');
var clean = require('gulp-clean');

// Tasks directory
var tasks = requireDir('./gulp');

// Development tasks
gulp.task('serve', tasks.browserSync); //BrowserSync
gulp.task('sass', tasks.sass); // SASS files, PostCSS, autoprefixer
gulp.task('postCss', tasks.postCss); // PostCSS, autoprefixer
gulp.task('svgImages', tasks.svgImages); // Svg images
gulp.task('svgIcons', tasks.svgIcons); // Svg images
gulp.task('images', tasks.images); // Images
gulp.task('javascript', tasks.javascript); // Images

gulp.task('default', ['serve', 'sass', 'postCss', 'svgImages', 'svgIcons', 'images', 'javascript']);

// Build tasks
gulp.task('copy', tasks.copy); // Copy - flexboxgrid, sanitize

gulp.task('build', ['sass', 'postCss', 'svgImages', 'svgIcons', 'images', 'copy', 'javascript']);
