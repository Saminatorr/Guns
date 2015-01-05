var gulp = require('gulp'),
    uglify = require('gulp-uglify');

gulp.task('minify', function () {
    gulp.src('js/script.js')
        .pipe(uglify())
        .pipe(gulp.dest('minjs'));

    gulp.src('src/controller/*')
        .pipe(uglify())
        .pipe(gulp.dest('minjs'));


})