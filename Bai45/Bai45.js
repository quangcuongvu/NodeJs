// Làm viêc với file trong Nodejs
// fs

var fs=require("fs");
var content = fs.readFileSync(__dirname + "/readme.txt","utf8");
console.log(content);

fs.readFile(__dirname+ "/readme.txt",function (err,data) {  
    console.log(data);
});
console.log("Done");