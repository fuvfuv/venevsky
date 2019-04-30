const spritesmith = require('gulp.spritesmith');

pngPath = {
	"input": "./assets/static/images/icons/*.png",
	"scss": "./assets/static/styles/utils/",
	"output": "./build/images/sprite",
};

module.exports = function () {
	$.gulp.task('png-sprite', function () {
		var spriteData = $.gulp.src(pngPath.input).pipe(spritesmith({
			imgName: 'sprite.png',
			cssName: 'png-sprite.scss',
			cssFormat: 'scss',
			padding: 15,
			imgPath: '../images/icons/sprite.png'
		}));
		spriteData.css.pipe($.gulp.dest(pngPath.scss)); // путь, куда сохраняем стили
		return spriteData.img.pipe($.gulp.dest(pngPath.output)); // путь, куда сохраняем картинку
	});
}