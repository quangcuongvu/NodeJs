// Buffer
// - là kiểu dữ liệu sẵn có ở trong nodejs

var buffer= new Buffer("Xin chào","utf8");

console.log(buffer);
console.log("=====================");
console.log(buffer.toString()); //utf8
console.log("=====================");
console.log(buffer.toString("ascii"));
console.log("=====================");
console.log(buffer.toJSON());
console.log("=====================");
console.log(buffer[2]);
console.log("=====================");
buffer.write("Hoa");
console.log(buffer.toString());