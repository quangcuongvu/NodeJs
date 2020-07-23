function sayHello(){
    console.log("Hello NodeJS");
}

sayHello();
// first-class function
function logSaying(fn){
    fn();
}

logSaying(sayHello);

//function expression - Biểu thức hàm
var sayGoodbye=function () {
    console.log("GoodBye!!");
}

sayGoodbye();

