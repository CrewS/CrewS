var gulp = require('gulp')
var shell = require('gulp-shell')

gulp.task('build', shell.task('node build/build.js'))


gulp.task('watch',function(){
	
})
gulp.watch(['src/views/*.vue','src/views/components/*.vue'],['build'])

