'use strict'

var EventEmitter = require("events");

module.exports = class Dialog extends EventEmitter{
    constructor(){
        super(); // có hàm này mới chạy đc hàm this
        this.message="hello world";
    }
    sayHello(data){
        console.log(`${this.message}: ${data}`)
        this.emit("hello",data);
    }
}
