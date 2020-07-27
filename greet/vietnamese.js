var greetings=require("./greetings.json")

var sayHello=function(){
    console.log(greetings.vi);
}
/* //viết không dùng json
var sayHello =function(){
    console.log("Xin chào, Mình là Vũ Quang Cường");
}
*/
module.exports=sayHello;

