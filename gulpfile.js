/* jshint node: true */
'use strict';

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch'),
    gulpif = require('gulp-if'),
    clean = require('gulp-clean'),
    browserify = require('gulp-browserify'),
    browserifyHandlebars = require('browserify-handlebars');

var paths = {
    js: './js/**',
    jsDir: './js/'
};

gulp.task('js', function() {
    return gulp.src(paths.jsDir + 'food.js')
        .pipe(browserify({
            transform: [browserifyHandlebars],
            debug: !gutil.env.production
        }))
        .on('prebundle', function(bundler) {
            bundler.require('lodash', {expose: 'underscore'});
        })
        .pipe(gulpif(gutil.env.production, uglify()))
        .pipe(rename('build.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
    gulp.watch(paths.js, ['js']);
});

gulp.task('default', ['js', 'watch']);
