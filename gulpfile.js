var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('webserver', function() {
  connect.server();
});

gulp.task('default', ['webserver']);


//gulp.task('images', function(){
//  return gulp.src('app/views/images/**/*.+(png|jpg|jpeg|gif|svg)')
  //.pipe(imagemin())
  //.pipe(gulp.dest('dist/views/images'))
//});

var cache = require('gulp-cache');

gulp.task('images', function(){
  return gulp.src('app/views/images/**/*.+(png|jpg|jpeg|gif|svg)')
  //caching images that ran through imagemin
  .pipe(cache(imagemin({
    interlaced: true
  })))
  .pipe(gulp.dest('dist/views/images'))
});

var imageResize = require('gulp-image-resize')

gulp.task('imgResize', function () {
  gulp.src('app/views/images/pizzeria-small.jpg')
    .pipe(imageResize({
      width : 100,
      drop: true,
      upscale: false
    }))
    .pipe(gulp.dest('dist/views/images'))
});
