// Kế thừa Event Emitter


var Dialog=require("./dialog")
var dialog =new Dialog();

dialog.on("hello",function(data){
    console.log("Có 1 lời chào mời!",data);
});

dialog.sayHello("Mai Hoa");