var Emitter =require("./Bai28"); 

var emitter = new Emitter(); // khởi tạo 1 đối tượng 

emitter.on("bad",function(){ // bắt 1 sự kiện dùng ".on"
    console.log("Một môn nào đó bị điểm kém!");
});

emitter.on("bad",function () {
    console.log("Đã có điểm kém, cần phải nhắc nhở.")
});

// có 1 bảng điểm
var scores =[10,4];

for (var s of scores ){
    if(s<5){
        console.log("Điểm thấp quá ", s);
        emitter.emit("bad");
    }
    // insert db.
}