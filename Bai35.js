// Nodejs: ES6 Class
'use strict';

class Person{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    // định nghĩa function
    sayHello(){
        console.log("Hello "+this.firstName + " " + this.lastName);
    }

}

var hoa =new Person("Hoa","Mai");
hoa.sayHello();

var phuong= new Person("Phượng", "Yến");
phuong.sayHello();

console.log(hoa.__proto__);
console.log(hoa.__proto__ === phuong.__proto__);