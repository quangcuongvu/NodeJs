// kế thừa event emitter
// Sử dụng call, apply
var EventEmitter =require("events");
var util =require("util");

function Dialog(){
    EventEmitter.call(this);
    this.message= "Hello World";
}

util.inherits(Dialog,EventEmitter);

Dialog.prototype.sayHello=function () {
    console.log(this.message);
    this.emit("hello"); // tạo sự kiện Hello
}

var dialog =new Dialog;

dialog.on("hello",function () {
    console.log("Có 1 lời chào.");
});

dialog.sayHello("Quang Cường")