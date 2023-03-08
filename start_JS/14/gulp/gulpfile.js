function hello(cb){
    console.log("Hello");
    cb();
}
function world(cb){
    console.log("world!!!!!");
    cb();
}
exports.default = hello;
exports.world = world;