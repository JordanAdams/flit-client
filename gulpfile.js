const gulp = require('gulp');
const browsersync = require('browser-sync');
const css = require('./gulp/tasks/css');
const nunjucks = require('./gulp/tasks/nunjucks');
const js = require('./gulp/tasks/js');
const config = require('./gulp/config');

gulp.task('css', css);
gulp.task('js', js);
gulp.task('nunjucks', nunjucks);

gulp.task('watch', ['default'], () => {
  browsersync.init({
    server: {
      baseDir: './dist'
    }
  });

  gulp.watch(config.css.watch, ['css'])
    .on('change', browsersync.reload);

  gulp.watch(config.js.watch, ['js'])
    .on('change', browsersync.reload);

  gulp.watch(config.nunjucks.watch, ['nunjucks'])
    .on('change', browsersync.reload);
});

gulp.task('default', ['css', 'js', 'nunjucks']);
