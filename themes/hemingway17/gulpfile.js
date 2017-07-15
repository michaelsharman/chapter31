var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function () {
    gulp.src('sass/style.sass')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer())
        .pipe(gulp.dest('static/css/'));
});

gulp.task('scripts', function () {
    gulp.src('javascripts/**/*.js')
        .pipe(uglify())
        .pipe(concat('hemingway17.js'))
        .pipe(gulp.dest('static/javascripts/'));
});

gulp.task('watch', function () {
    gulp.watch('sass/style.sass', function() {
        gulp.src('sass/style.sass')
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(autoprefixer())
            .pipe(gulp.dest('static/css/'));
        });
    gulp.watch('javascripts/reading-time.js', function() {
        gulp.src('javascripts/reading-time.js')
            .pipe(uglify())
            .pipe(concat('hemingway17.js'))
            .pipe(gulp.dest('static/javascripts/'));
        });
});
