var gulp = require('gulp');

// 汎用プラグイン
var del = require('del');

var paths = {
  static: './src/static/**/*',
  dest: './dist'
};

gulp.task('static', function() {
  return gulp.src(paths.static)
    .pipe(gulp.dest(paths.dest));
});

gulp.task('clean', function(cb) {
  del([
    paths.dest + '/**/*'
  ]).then(function() {
    cb();
  });
});

gulp.task('build', ['clean'], function() {
  gulp.start(['static']);
});

/* 外部ファイルから読み込み
----------------------------------------------------------*/
const spriteTask = require('./gulp_tasks/sprite.js');
const compositeTask = require('./gulp_tasks/composite.js');

spriteTask();
compositeTask();
