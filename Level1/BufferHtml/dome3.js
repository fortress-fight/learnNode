console.log(Buffer.isEncoding('utf8')); // true

// ---------isBuffer
var obj = {
    name:'ff',
    age:24
}
console.log(Buffer.isBuffer(obj)); // false
var buf = new Buffer(10);
console.log(Buffer.isBuffer(buf)); // true

// --------byteLength

console.log(Buffer.byteLength('哈哈哈')); // 9

// ----------concat
var bufC1 = new Buffer('abc');
var bufC2 = new Buffer('123');
var bufC = Buffer.concat([bufC1, bufC2], 5);
console.log(bufC);
// <Buffer 61 62 63 31 32>
console.log(bufC.toString());
// abc12
