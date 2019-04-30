const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const gulpif = require('gulp-if');

module.exports = function () {
	$.gulp.task('pug', () => {
		return $.gulp.src('./assets/pug/*.pug')
			.pipe(plumber())
			.pipe(pug({
				pretty: true
			}))
			.pipe(gulpif($.production, pug({
				pretty: false
			})))
			.pipe(plumber.stop())
			.pipe($.gulp.dest('./build/'))
			.on('end', $.browserSync.reload);
	});
};