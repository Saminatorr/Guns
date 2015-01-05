var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin');

gulp.task('minify', function () {
    gulp.src('js/script.js')
        .pipe(uglify())
        .pipe(gulp.dest('minjs'));
})