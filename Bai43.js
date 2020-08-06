// TypeArray (int8Array, Int16Array, Int32Array, Float64Array,..)
// ArrayBuffer
// 1 byte = 8bits
var buffer= new ArrayBuffer(8);
var view= new Int32Array(buffer);
view[0]=5;
view[1]=10;
// view[2]=15;
console.log(view);
