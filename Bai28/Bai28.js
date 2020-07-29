// even emitter
function Emitter() {
    this.events = {}; // hàm lưu dữ sự kiện được thêm mới vào
}
// code dưới bổ sung 1 function
Emitter.prototype.on = function (type, listener) {
    this.events[type] = this.events[type] || []; // kiểm tra đã tồn tại hay chưa
    this.events[type].push(listener);
}

// code phát ra sự kiện 
Emitter.prototype.emit= function(type) {
    if (this.events[type]){ //nếu có sự kiện ở trong emitter thì phát nó ra
        this.events[type].forEach(function (listener){ //kích hoạt sự kiện
           listener(); //duyet mang & goi ham
        })
    }
}
module.exports = Emitter; // module để sử dụng các hàm khác