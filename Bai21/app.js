var hello =require("./hello");

hello();

var hello1 =require("./hello1").sayHello;
hello1();

var hello2=require("./hello2");
hello2.sayHello();

hello2.message="Changed hello Nodejs";
var hello22=require("./hello2");
hello22.sayHello();

var hello3 =require("./hello3");
var hello3 =new hello3();
hello3.sayHello();

var hello4=require("./hello4").sayHello;
hello4();