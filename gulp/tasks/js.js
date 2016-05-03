const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const sourcemaps = require('gulp-sourcemaps');
const browsersync = require('browser-sync');
const config = require('../config');

module.exports = () => {
  const bundler = browserify(config.js.entries, {
    debug: true
  });

  bundler.bundle()
    .pipe(source('app.min.js'))
    .pipe(gulp.dest(config.js.dest))
    .pipe(browsersync.stream());
};
