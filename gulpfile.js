var gulp = require('gulp'); 
 
// include plug-ins
var jshint = require('gulp-jshint');
 
// JS hint task
gulp.task('jshint', function() {
  gulp.src('/lib/**.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

var mocha = require('gulp-mocha');

gulp.task('mocha', function () {
    gulp.src('./tests/**.js')
        .pipe(mocha({reporter: 'nyan'}));
});