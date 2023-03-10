const { src, dest, series, parallel } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

// Компіляція Sass у CSS, додавання префіксів та мініфікація
function styles() {
  return src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream());
}

// Компіляція та мініфікація JavaScript
function scripts() {
  return src('src/js/**/*.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(dest('dist/js'))
    .pipe(browserSync.stream());
}

// Оптимізація зображень
function images() {
  return src('src/img/**/*')
    .pipe(imagemin())
    .pipe(dest('dist/img'))
    .pipe(browserSync.stream());
}

// Запуск сервера для розробки
function serve() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  // Слідкувати за змінами у файлах та автоматично перезавантажувати сторінку
  watch('src/scss/**/*.scss', styles);
  watch('src/js/**/*.js', scripts);
  watch('src/img/**/*', images);
  watch('./*.html').on('change', browserSync.reload);
}

// Виконання всіх задач одночасно
exports.default = parallel(styles, scripts, images, serve);

// styles - компіляція Sass у CSS, додавання префіксів та мініфікація CSS-файлів;
// scripts - компіляція та мініфікація JavaScript-файлів;
// images - оптимізація зображень;
// serve - запуск сервера для розробки та відслідковування змін у файлах.
// Остання задача exports.default запускається за допомогою команди gulp. Вона виконує всі чотири задачі паралельно, а також запускає сервер для розробки та відслідковує зміни у файлах, щоб автоматично перезавантажувати сторінку.