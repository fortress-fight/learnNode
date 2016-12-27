/*var a = new Buffer(4)
console.log(a) //<Buffer 00 00 00 00>*/
/*
var arr = new Buffer([1,2,3])
console.log(arr) //<Buffer 01 02 03>*/

var str = new Buffer('abc', 'utf-8')
/*console.log(str) //<Buffer 61 62 63>

console.log(str.length) //3
console.log(str[0]) //97
console.log(String.fromCharCode(str[0])) // a*/

var str1 = '哈哈哈';
console.log(str1.length); // 3
console.log(new Buffer(str1).length);//9