// Sử dụng kỹ thuật pipe

var fs=require("fs");
var zlib =require("zlib");

var readable =fs.createReadStream(__dirname+ "/readme.txt",{
    encoding: "utf8",
    highWaterMark:16*1024 // 16kb
});

var writable = fs.createWriteStream(__dirname+"/read2copy.txt");

var compressed =fs.createWriteStream(__dirname + "/readme.txt.gz")

var gzip = zlib.createGzip();

// readable.on("data",function(chunk){
//     console.log(chunk.length);
//     writable.write(chunk);
// });

//copy -copy file
readable.pipe(writable);

// compress - nén file
readable.pipe(gzip).pipe(compressed);



