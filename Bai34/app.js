var util =require("util");
const { pseudoRandomBytes } = require("crypto");
function Person() {
    this.firstName="Cường";
    this.lastName="Vũ Quang";
}

Person.prototype.sayHello=function () {  
    console.log("Hello "+ this.firstName+" "+this.lastName);
}

function Student() {
    Person.call(this); // kế thừa thuộc tính
    this.id="1234";

}

util.inherits(Student,Person);

var sv=new Student();
sv.sayHello();