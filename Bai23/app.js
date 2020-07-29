
 var url =require("url");
 //https://www.facebook.com/quangcuong.vu.1998/

var urlInfo=url.parse("https://www.facebook.com/quangcuong.vu.1998/");

console.log(urlInfo);

var myURL = new URL('/VuQuangCuong', 'https://facebook.com/');
console.log(myURL);
console.log(URL === require('url').URL);

var myURL = new URL({ toString: () => 'https://Quyettammanh.com/' });
console.log(myURL);

var myURL = new URL('https://猜你喜欢');
console.log(myURL);