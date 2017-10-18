// let gulp = require('gulp');
// let cleanCSS = require('gulp-clean-css');
 
// gulp.task('minify-css', () => {
//   return gulp.src('./public/css/*.css')
//     .pipe(cleanCSS({compatibility: 'ie8'}))
//     .pipe(gulp.dest('./dist'));
// });

let gulp = require('gulp');
let htmlmin = require('gulp-htmlmin');
 
gulp.task('minify', function() {
  return gulp.src('./views/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});


   gulp.task('default',['minify']);