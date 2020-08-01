// Kế thừa Event Emitter

var EventEmitter =require("events");
var util =require("util");
const { unwatchFile } = require("fs");

function tambiet(){
    this.message="Good bye. See you later!";
}
util.inherits(tambiet,EventEmitter);
tambiet.prototype.sayGoodBye= function (data) {
    console.log(this.message +" : "+data);
    this.emit("goodbye",data) // tên sự kiện
}
var a=new tambiet();

a.on("goodbye",function (data) {
    console.log("Cố gắng kiếm tiền đi thôi ", data);
})

a.sayGoodBye("Quang Cường")