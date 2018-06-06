'use strict';

const gulp = require('gulp'),
  gmocha = require('gulp-mocha'),
  gutil = require('gulp-util');

gulp.task('mocha', function () {
  return gulp.src(['/test/*.js'], {
      read: false
    })
    .pipe(gmocha({
      reporter: 'list'
    }))
    .on('error', gutil.log);
});

gulp.task('mocha-watch', function () {
  gulp.run('mocha');
  gulp.watch(['./**/*.js', 'test/**/*.js'], ['mocha']);
});

gulp.task('default', ['mocha-watch']);
