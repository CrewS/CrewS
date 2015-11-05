var gulp = require('gulp'),
    rename=require('gulp-rename'),
    uglify = require('gulp-uglify'),
    minifycss = require('gulp-minify-css'),
    autoprefixer=require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('minify-js', function () {
   gulp.src(['app/js/*.js','!app/js/*.min.js'],{base:'app'})
       .pipe(uglify())
       .pipe(rename({suffix: '.min'}))
       .pipe(gulp.dest('app'));
});
gulp.task('minify-css',function(){
    gulp.src(['app/css/*.css','!app/css/*.min.css'],{base:'app'})
        .pipe(minifycss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app'));
});
gulp.task('rel',function(){
    gulp.src('app/*.html')
        .pipe(gulp.dest('build'))
});
gulp.task('watch',function(){
	gulp.watch('app/scripts/main.js',['minify']);
});
gulp.task('testfixer',function(){
    gulp.src('app/styles/*.css')
        .pipe(autoprefixer({browsers:['last 2 versions'],cascade:true}))
        .pipe(rename({suffix:'.auto'}))
        .pipe(gulp.dest(""))
});

gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: 'app'
        }
    });
    gulp.watch('app/**/*.css',['minify-css']);
    gulp.watch('app/**/*.js',['minify-js']);
    gulp.watch(['*.html', 'css/**/*.min.css', 'js/*.min.js'], {cwd: 'app'}, reload);
});