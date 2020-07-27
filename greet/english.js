var greetings =require("./greetings.json")


var sayHello=function(){
    console.log(greetings.en);
}
/* //viết không dùng json
var sayHello =function(){
    console.log("Hello, I am Cường Vũ Quang");
}
*/

module.exports=sayHello;