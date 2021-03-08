const gulp = require('gulp')
const nodemon = require('gulp-nodemon')
const plumber = require('gulp-plumber')

gulp.task('copy', done => {
  console.log('copy')
  gulp.src('./unpackage/dist/dev/mp-weixin/common/main.wxss')
    .pipe(gulp.dest('./kiki-ui'))
  done()
})

gulp.task('watch', done => {
  gulp.watch('./unpackage/dist/dev/mp-weixin/common/main.wxss', gulp.series('copy'))
  done()
})

gulp.task('default', gulp.series('copy', 'watch'))
