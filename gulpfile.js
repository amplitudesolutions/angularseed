'use strict';

var gulp = require('gulp');
var gulpNgConfig = require('gulp-ng-config');

var configureSetup  = {
  createModule: false,
  constants: {
  	// ADD ANY ENV VARIABLES YOU WANT TO BE IN HERE. This will get the ENV API_URL and put into constant
  	// API_URL: process.env.API_URL
  }
};

gulp.task('config', function() {
  gulp.src('config.json')
      .pipe(gulpNgConfig('amplitudeApp', configureSetup))
      .pipe(gulp.dest('app/js')); 
});