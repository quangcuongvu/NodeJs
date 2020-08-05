// Hàm callback
/*
 1 hàm call back là 1 function được truyền vào lời gọi môt hàm khác
- Mà nó được thực thi vào 1 thời điểm tương lai sau khi hoàn tất 1 công việc nào đó
*/

var firstFunction =function () {
    console.log("I am first");
}
var secondFunction =function(){
    setTimeout(firstFunction,5000);
    console.log('I am second!');
}

secondFunction();