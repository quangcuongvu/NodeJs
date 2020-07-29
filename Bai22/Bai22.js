// exports and module.exports hoạt động như thế nào.
// Nên dùng module.exports

exports=function () {
    console.log("Hello Node.js")
}
console.log(exports);
console.log(module.exports);