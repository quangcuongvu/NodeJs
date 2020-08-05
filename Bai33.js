// JavaScript call & apply

var obj ={
    name: "Cuong",
    sayHello:function(param1, param2){
        console.log(`Hello ${this.name}`);
        console.log("Params: ", param1, param2);
    }
}
obj.sayHello("Xin chào","2016");
// Hàm call truyền vào 1 danh sách
obj.sayHello.call({name: "Yến Phượng"},"Xin chào","2017");
// Hàm app truyền vào 1 mảng
obj.sayHello.apply({name: "Yến Phượng"},["Xin chào","2018"]);
