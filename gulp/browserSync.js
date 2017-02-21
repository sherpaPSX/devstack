var gulp = require('gulp');
var browserSync = require('browser-sync');

module.exports = function () {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./assets/sass/**/*.scss", ['styles']);
    gulp.watch("./assets/js/*.js", ['javascript']);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch('./assets/images/**/*.*', ['images']);
};
