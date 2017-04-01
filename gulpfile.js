'use strict';

const gulp = require('gulp');
const jshint = require('gulp-jshint');
const arquivos = './*.js';

gulp.task('lint', () => {
  gulp.src(arquivos)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('default', () => {
  gulp.run('lint');
  gulp.watch(arquivos, (evt) => {
    gulp.run('lint');
  })
});
