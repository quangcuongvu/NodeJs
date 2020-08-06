// Hàm gọi lại callback
// Xử lý kết quả trả về
/*
Callback
- 1 hàm callback là 1 function được truyền vào lời gọi 1 hàm khác
- Mà nó được thực thi vào 1 thời điểm tương lai sau khi hoàn tất 1 công việc nào đó.

*/

function readDatabase(callback) {  
    //read done
    var user ={
        name: "Quang Cường"
    }
    callback(user);
};

// yêu cầu truy vấn dữ liệu
readDatabase(function (data) {  
    console.log("Read done callback");
    console.log("Data:",data);
});

//nơi khác
readDatabase(function (data) {  
    console.log("read done callback 2");
    console.log('User name: ',data.name);
});
