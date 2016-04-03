'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var lessDir = "less";
var lessDest = "css";

gulp.task('compile-less', function () {
    return gulp.src(lessDir + '/*.less')
        .pipe(less({}))
        .pipe(gulp.dest('css'));
});

gulp.task('modify-file', function () {
    return gulp.watch(lessDir + '/*.less', ['compile-less']);
});

gulp.task('default', ['compile-less', 'modify-file']);
