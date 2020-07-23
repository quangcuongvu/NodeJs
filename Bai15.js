// Su ke thua
function Person(name,password) {
    this.name = name;
    this.password = password;
}

Person.prototype.getName= function () {
    return this.name;
}
Person.prototype.getPassword= function () {
    return this.password;
}
Person.prototype.getLevel= function () {
    return this.getLevel;
}
Person.prototype.level="admin";

function User(name) {
    this.name=name;
}

User.prototype =new Person();

var person = new Person("Co phong suong","123456");
var user =new User("Quang Cuong","mk");
console.log(person.getName());
console.log(person.getPassword());
console.log(person.level);
console.log(user.getName());
console.log(user.getPassword());
console.log(user.level);

Date.prototype.vnFormat=function () {
    var yyyy = this.getUTCFullYear();
    var mm = this.getMonth() +1;
    var dd = this.getDate();
    return dd + "/"+ mm +"/"+yyyy;
}

var now=new Date();
var xms=new Date(1998,7,15);
console.log(now.vnFormat());
console.log(xms.vnFormat());