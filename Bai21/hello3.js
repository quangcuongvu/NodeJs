function Person() {
    this.message="Ơn giời hoá ra vậy.";
    this.sayHello=function () {
        console.log(this.message);
    }
}

module.exports=Person;