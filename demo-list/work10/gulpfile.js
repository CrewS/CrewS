var gulp = require('gulp'),
    rename=require('gulp-rename'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    minifycss = require('gulp-minify-css'),
    autoprefixer=require('gulp-autoprefixer');
//var browserSync = require('browser-sync');
//var reload = browserSync.reload;
//
//gulp.task('minify-js', function () {
//   gulp.src(['teamapp/js/*.js','!teamapp/js/*.min.js'],{base:'teamapp'})
//       .pipe(uglify())
//       .pipe(rename({suffix: '.min'}))
//       .pipe(gulp.dest('teamapp'));
//});
//gulp.task('minify-css',function(){
//    gulp.src(['teamapp/css/*.css','!teamapp/css/*.min.css'],{base:'teamapp'})
//        .pipe(minifycss())
//        .pipe(rename({suffix: '.min'}))
//        .pipe(gulp.dest('teamapp'));
//});
//gulp.task('rel',function(){
//    gulp.src('teamapp/*.html')
//        .pipe(gulp.dest('build'))
//});
//gulp.task('watch',function(){
//	gulp.watch('app/scripts/main.js',['minify']);
//});
//gulp.task('testfixer',function(){
//    gulp.src('app/styles/*.css')
//        .pipe(autoprefixer({browsers:['last 2 versions'],cascade:true}))
//        .pipe(rename({suffix:'.auto'}))
//        .pipe(gulp.dest(""))
//});
//
//gulp.task('serve', function() {
//    browserSync({
//        server: {
//            baseDir: 'teamapp'
//        }
//    });
//    gulp.watch('teamApp/**/*.css',['minify-css']);
//    gulp.watch('teamApp/**/*.js',['minify-js']);
//    gulp.watch(['*.html', 'css/**/*.min.css', 'js/*.min.js'], {cwd: 'teamapp'}, reload);
//});
gulp.task('less',function(){
    gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest("css"));
});
gulp.task('watch',function(){
    gulp.watch('less/*.less',['less']);
});