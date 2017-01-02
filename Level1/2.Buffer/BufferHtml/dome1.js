// var buf = new Buffer(4);
// console.log(buf);
// //<Buffer f8 f4 11 01>
//
// console.log(typeof buf);
// // object
//
// var bufArr = new Buffer([1,2,3,4])
// console.log(bufArr);
// //<Buffer 01 02 03 04>

// ---------------------------------
var bufStr = new Buffer('12123')
console.log(bufStr);
//<Buffer 31 32 31 32 33>

var bufStr = new Buffer('呵呵哈哈哈', 'utf-8')
console.log(bufStr);
console.log(String.fromCharCode(bufStr));
//<Buffer e5 91 b5 e5 91 b5 e5 93 88 e5 93 88 e5 93 88>

var p = '你好';
console.log(p.length); //2
console.log(new Buffer(p).length); //6
