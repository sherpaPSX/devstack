var gulp = require('gulp');
var browserSync  = require("browser-sync").create();
var htmlInjector = require("bs-html-injector");




/**
 * Start Browsersync
 */
module.exports = function () {
    browserSync.use(htmlInjector, {
        files: "app/*.html"
    });
    browserSync.init({
        server: "/"
    });

    gulp.watch("./assets/sass/**/*.scss", ['sass','postCss']);
    gulp.watch("./assets/js/*.js", ['javascript']);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch('./assets/images/**/*.*', ['images']);
    gulp.watch('./assets/svg/**/*.*', ['svgImages']);
};
