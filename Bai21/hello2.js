function Person(){
    this.message="Hihi, Mình là Cường.";
    this.sayHello=function () {
        console.log(this.message);
    }
}

module.exports= new Person();