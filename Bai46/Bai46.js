// Làm việc với stream
/*
Chunk
- là một đoạn (mảnh) dữ liệu được truyền qua 1 stream
- dữ liệu được cắt ra thành những mảnh chunks, và chuyển đi

*/
var fs = require("fs");

var readable = fs.createReadStream(__dirname + "/readme.txt",{
    enncoding: "utf8",
    highWaterMark:32*1024 //32kb
});


var writable = fs.createWriteStream(__dirname + "/readme2copy.txt");

readable.on("data",function (chunk) {
    console.log(chunk.length);
    writable.write(chunk);
});
