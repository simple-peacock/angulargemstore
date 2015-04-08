var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('reload', function() {
	gulp.src('./**/*.{js,html,css}').pipe(livereload());
});

gulp.task('watch', function() {
	livereload.listen();
	console.log("Started livereload server on port: 35729");	
	gulp.watch('./**/*.{js,html,css}', ['reload']);
    // gulp.watch('./*.html', ['reload']);
});

gulp.task('default', ['watch'], function() {

});


