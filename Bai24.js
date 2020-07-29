// NodeJs vs ES6
/*
ES6:
- shipping: tính năng ổn định và được bật mặc định trong nodejs sử dụng
- Staged: Tính năng gần như hoàn thiện và có thể sử dụng bằng viêc khai
báo cờ - harmony, nhưng chưa ổn định
- In progress: Tính năng đang thử nghiệm, có thể sử dụng. V8 team engineer có thể
thay đổi mà không cần thông báo
*/
var arr =[4,5,6]
for(var item of arr)
    console.log(item,item==5)

const name="Cuong";
console.log(name);