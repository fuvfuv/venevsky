const plumber = require('gulp-plumber');
const concat = require('gulp-concat');
const jsmin = require('gulp-jsmin');
const gulpif = require('gulp-if');

scriptsPath = {
  "input": "./assets/static/js/*.js",
  "ouput": "./build/js/"
};

// Библиотеки подключаем в libsJS:dev в массив
libs = ['node_modules/jquery/dist/jquery.min.js',
  'node_modules/svg4everybody/dist/svg4everybody.min.js'
];

module.exports = function () {
  $.gulp.task('libsJS', function () {
    return $.gulp.src(libs)
      .pipe(concat('libs.min.js'))
      .pipe($.gulp.dest(scriptsPath.ouput));
  });

  $.gulp.task('js', function () {
    return $.gulp.src(scriptsPath.input)
      .pipe(plumber())
      .pipe(gulpif($.production, jsmin()))
      .pipe($.gulp.dest(scriptsPath.ouput))
      .on('end', $.browserSync.reload);
  });
}