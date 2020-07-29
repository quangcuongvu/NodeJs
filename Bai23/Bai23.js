// Sử dụng module dựng sẵn trong Nodejs
var util=require("util");

var name = "Cường";
var message =util.format("Hello, %s",name);

console.log(message);
util.log(message);

//util kiểm tra đối tượng có phải mảng hay không.

console.log(util.isArray([]));
console.log(util.isArray(new Array));
console.log(util.isArray({}));

