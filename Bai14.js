var person ={
    firstname:"Cuong",
    lastname:"Vu Quang",
    sayHello:function () {
        console.log("Hello,"+this.firstname+" "+this.lastname);
    }
}
person.sayHello();
var keyName="lastname";

console.log(person.firstname);
console.log(person[keyName]);