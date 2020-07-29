var Emitter = require("events");
var enventConfig=require("./config").events;
var emitter = new Emitter();
emitter.on(enventConfig.BAD_SCORE,function(){ // bắt 1 sự kiện dùng ".on"
    console.log("Hello,");
});
emitter.on(enventConfig.BAD_SCORE,function () {
    console.log("Mình là Cường Vũ Quang.");
});

var  a=['en','fr'];

for (var s of a ){
    if(s=="vi"){
        emitter.emit(enventConfig.BAD_SCORE);
        console.log("Xin chào thế giới!!!");
    }
    if(s=="en"){
        emitter.emit(enventConfig.BAD_SCORE);
        console.log("Hello in the world!!!");
    }
    // insert db.
}