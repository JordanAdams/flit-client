const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');
const rename = require('gulp-rename');
const browsersync = require('browser-sync');
const config = require('../config');

module.exports = () => {
  return gulp.src(config.nunjucks.src)
    .pipe(nunjucks.compile())
    .pipe(rename({extname: '.html'}))
    .pipe(gulp.dest(config.nunjucks.dest))
    .pipe(browsersync.stream());
};
