'use strict';
const yargs = require('yargs');
const argv = yargs.argv;

global.$ = {
  gulp: require('gulp'),
  browserSync: require('browser-sync').create(),
  path: {
    tasks: require('./gulp/path/path.js')
  },
  production: argv.production,
};

$.path.tasks.forEach(taskPath => {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series('del', $.gulp.parallel('fonts', 'pug', 'img', 'svg-sprite', 'styles', 'libsJS', 'js'), $.gulp.parallel('watch', 'serve')));