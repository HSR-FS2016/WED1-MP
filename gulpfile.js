var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./website"
        }
    });
});

gulp.task('default', ['browser-sync']);
