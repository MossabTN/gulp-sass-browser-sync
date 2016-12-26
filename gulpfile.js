var gulp = require('gulp');
var sass = require('gulp-sass');
var autoPrefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('styles', function() {
    gulp.src('./css/style.scss')
        .pipe(sass())
        .pipe(autoPrefixer())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.reload({stream:true}))
});


gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', function () {
    gulp.watch('./css/*.scss', ['styles']);
    gulp.watch(['./*.html','./example/*.html','./js/*.js']).on('change',browserSync.reload);
});

gulp.task('default',['styles','watch','server']);