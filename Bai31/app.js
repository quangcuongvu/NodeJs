// Kế thừa Event Emitter
var EventEmitter =require("events");
var util =require("util");
function Dialog(){
    this.message ="Hello world!";
}

util.inherits(Dialog,EventEmitter);
Dialog.prototype.sayHello=function (data) {
    console.log(this.message +": "+ data);
    this.emit("Hello",data); // xử lý sự kiện
}

var dialog= new Dialog();

dialog.on("Hello",function (data) {
    console.log("Có 1 lời chào mới!",data);
    
})

dialog.sayHello("Quang Cường");