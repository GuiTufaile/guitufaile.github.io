var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

// task para o Sass
gulp.task('sass', function() {
	return gulp.src('sass/**/*.sass')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest('css'));
});

// Task watch
gulp.task('watch', function(){
	//console.log('Hi Coders!');
	gulp.watch('sass/**/*.sass', ['sass']);
});

// Task default
gulp.task('default',['sass', 'watch']);
