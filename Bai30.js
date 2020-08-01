// Object.create
// kế thừa thuộc tính
var person ={
    firtName:"",
    lastName:"",
    getFullName:function(){
        return this.firtName+" "+this.lastName;
    }
}
var hoa = Object.create(person);
hoa.firtName= "Hoa";
hoa.lastName ="Nguyen thi";

var yen = Object.create(person);
yen.firtName="Yen";
yen.lastName="Nguyen Hoang";

console.log(hoa.getFullName());
console.log(yen.getFullName());
