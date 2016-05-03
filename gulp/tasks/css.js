const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const cssnext = require('postcss-cssnext');
const partialImport = require('postcss-partial-import');
const normalize = require('postcss-normalize');
const clearfix = require('postcss-clearfix');
const stylelint = require('stylelint');
const browsersync = require('browser-sync');
const config = require('../config');

module.exports = () => {
  return gulp.src(config.css.src)
    .pipe(sourcemaps.init())
    .pipe(postcss([
      normalize,
      partialImport({prefix: ''}),
      cssnext,
      clearfix
      // stylelint
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.css.dest))
    .pipe(browsersync.stream());
};
