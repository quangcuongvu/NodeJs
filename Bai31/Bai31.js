// Kế thừa Event Emitter
var EventEmitter =require("events");
var util =require("util");
function Dialog(){
    this.message ="Hello world!";
}

util.inherits(Dialog,EventEmitter);
Dialog.prototype.sayHello=function () {
    console.log(this.message);
    this.emit("Hello"); // xử lý sự kiện
}

var dialog= new Dialog();
dialog.on("Hello",function () {
    console.log("Có 1 lời chào mới!");
    
})

dialog.sayHello("Quang Cường");