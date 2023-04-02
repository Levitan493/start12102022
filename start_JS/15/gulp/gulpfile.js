// function hello(cb){
//     console.log('Hello');
//     cb();
// }

// function world(cb){
//     console.log('world');
//     cb();
// }
// exports.world = world;
//  exports.default = hello;

// function move(){   
//     return src('app/index.html')
//     .pipe(dest('dist/new-style'));
// }

// function moveStyle(){
//     return src('app/style/**/*.css')
//     .pipe(dest('dist/'));
// }

const { watch } = require('browser-sync');
const {src, dest, series, parallel} = require('gulp'); 
const browserSync = require('browser-sync').create();

function startServer() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
}

function styleNotify(cb){
    console.log('Style was change');
    cb();
}

function watchMan(){
    watch('app/style/*.css', {delay:2000}, styleNotify);
    
}

function move(cb){   
    return src(['app/index.html', '!app/style/**/*.scss'])
    .pipe(dest('dist/'));
    cb();
}



exports.default = series( move, watchMan  );