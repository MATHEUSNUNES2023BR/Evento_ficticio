const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const log = require('fancy-log');

function buildStyles() {
    log('Compilando arquivos SCSS...');
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./src/styles/css'))
        .on('end', () => log('Compilação completa! Arquivos gerados em dist/css'));
}

exports.default = buildStyles;
function watch() {
    gulp.watch('./src/styles/**/*.scss', buildStyles);
}

exports.watch = watch;
