/**
 * gulpファイル
 * @author 富谷誠
 * 作成日 2019/03/16
 */
var gulp = require('gulp');
//以下を追加
var sass = require('gulp-sass');
 
gulp.task('sass', function() {
  return gulp.src('./../scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    })).on('error', sass.logError)
    .pipe(gulp.dest('./../css'));
});

//  scssの変更を監視
gulp.task('watch', function(){
  gulp.watch('./../scss/**/*.scss',gulp.task('sass'));
});
