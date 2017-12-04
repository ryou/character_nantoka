var gulp = require('gulp');

// 汎用プラグイン
var del = require('del');

var paths = {
  static: './src/static/**/*',
  dest: './dist'
};

module.exports = () => {
  gulp.task('build.static', function() {
    return gulp.src(paths.static)
      .pipe(gulp.dest(paths.dest));
  });

  gulp.task('build.clean', function(cb) {
    del([
      paths.dest + '/**/*'
    ]).then(function() {
      cb();
    });
  });

  gulp.task('build', ['build.clean'], function() {
    gulp.start(['build.static']);
  });
};
