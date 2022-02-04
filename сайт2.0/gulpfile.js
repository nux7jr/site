const { notify } = require('browser-sync');
const { src, dest, watch, series } = require('gulp');
const browsersync = require('browser-sync').create();

// Browsersync Tasks
function browsersyncServe(cb){
  browsersync.init({
    server: {
      baseDir: '.'
    },
    notify: false
  });
  cb();
}

function browsersyncReload(cb){
  browsersync.reload();
  cb();
}

// Watch Task
function watchTask(){
  watch('*.html', browsersyncReload);
  watch(['CSS/style.css', 'js/**/*.js'], {interval: 1000, usePolling: true}, series(browsersyncReload) );
}

// Default Gulp task
exports.default = series(
  browsersyncServe,
  watchTask
);