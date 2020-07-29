// Object, function and array

var obj ={
    sayHello: "Hello"
}
console.log(obj.sayHello);
console.log(obj['sayHello']);

var prop= "sayHello";
console.log(obj[prop]);

//function vs arrs
var arr=[];

arr.push(function(){
    console.log("Hello Nodejs");
});

arr.push(function(){
    console.log("Hello Nodejs 1");
});


arr.push(function(){
    console.log("Hello Nodejs 2");
});

arr[0]();
arr[1]();
arr[2]();

console.log("================");
//for
arr.forEach(function(item){
    item();
});