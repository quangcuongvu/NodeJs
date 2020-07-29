var Emitter = require("./Bai28");
var emitter = new Emitter();
emitter.on("en",function(){ // bắt 1 sự kiện dùng ".on"
    console.log("Hello, My name is Cường.");
});
emitter.on("vi",function () {
    console.log("Xin chào, Mình là Cường Vũ Quang.");
});

var  a=["vi","en",'fr'];

for (var s of a ){
    if(s=="vi"){
        //console.log("Xin chào thế giới!!!");
        emitter.emit("vi");
    }
    if(s=="en"){
        console.log("Hello in the world!!!");
        emitter.emit("en");
    }
    // insert db.
}