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
    js: './assets/js/**',
    jsDir: './assets/js/',
    jsDest: './.tmp/public/js/',
    assets: './assets/images/**/*',
    assetsDest: './.tmp/public/'
};

gulp.task('js', ['clean-js'], function() {
    return gulp.src(paths.jsDir + 'main.js')
        .pipe(browserify({
            transform: [browserifyHandlebars],
            debug: !gutil.env.production
        }))
        .on('prebundle', function(bundler) {
            bundler.require('lodash', {expose: 'underscore'});
        })
        .pipe(gulpif(gutil.env.production, uglify()))
        .pipe(rename('food.js'))
        .pipe(gulp.dest(paths.jsDest));
});

gulp.task('assets', ['clean-assets'], function() {
    return gulp.src(paths.assets, {base: './assets/'})
        .pipe(gulp.dest(paths.assetsDest));
});

gulp.task('clean-js', function() {
   return gulp.src(paths.jsDest + '**', {read: false})
        .pipe(clean());
});

gulp.task('clean-assets', function() {
   return gulp.src(paths.assetsDest + '/images', {read: false})
        .pipe(clean());
});

gulp.task('clean', ['clean-build', 'clean-assets']);

gulp.task('build', ['assets', 'js']);

gulp.task('watch', function() {
    gulp.watch(paths.js, ['js']);
    gulp.watch(paths.assets, ['assets']);
});

gulp.task('default', ['build', 'watch']);
