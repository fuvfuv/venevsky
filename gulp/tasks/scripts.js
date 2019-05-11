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
   'node_modules/svg4everybody/dist/svg4everybody.min.js',
   'node_modules/slick-carousel/slick/slick.min.js',
   'node_modules/simplebar/dist/simplebar.min.js',
   'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
   'node_modules/jquery-validation/dist/jquery.validate.min.js',
   'node_modules/nouislider/distribute/nouislider.min.js',
   'node_modules/wnumb/wNumb.js',
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
