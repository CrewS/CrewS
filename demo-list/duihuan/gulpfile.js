var gulp = require('gulp');

//�������
var less = require('gulp-less');/**
 * Created by Administrator on 2016/1/18.
 */
gulp.task('less',function(){
    gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest('css'))
});
gulp.task('watch',function () {
    //livereload.listen();
    gulp.watch('less/*.less',['less']);
});