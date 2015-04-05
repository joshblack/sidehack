'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');

gulp.task('icons', function icons(cb) {
    gulp.src('src/icons/*.svg')
        .pipe(iconfont({
            fontName: 'icons',
            appendCodepoints: false,
            normalize: true,
            centerHorizontally: true,
            fontHeight: 100
        }))

        .on('codepoints', function (codepoints) {
            var options = {
                glyphs: codepoints,
                fontName: 'icons',
                fontPath: '.',
                className: 'icon'
            }

            gulp.src('src/templates/icon-template.css')
                .pipe(consolidate('lodash', options))
                .pipe(rename('Icons.scss'))
                .pipe(gulp.dest('src/components/Icon'))
        })
        .pipe(gulp.dest('src/components/Icon'));

    cb();
});
