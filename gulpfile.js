'use strict';

var gulp          = require('gulp');
var useref        = require('gulp-useref');

// Build dist
function optimize() {
  return gulp
    .src(['example/index.html', 'example/style.css'])
    .pipe(useref())
    .pipe(gulp.dest('github-page'))
};

const dist = gulp.series(optimize);
exports.dist  = dist;