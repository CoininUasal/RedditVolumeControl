// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');

gulp.task('sass', function () {
    gulp.src('./styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }));
});
gulp.task('reactjs', function () {
    return gulp.src('./scripts/components/**/*.jsx')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest(function (f) {
            return f.base;
        }));
});
gulp.task('sass:watch', function () {
    gulp.watch('./styles/*.scss', ['sass']);
});
