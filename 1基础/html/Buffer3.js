
//console.log( Buffer.isEncoding('utf-8') ); // true
/*

var arr = [1,2,3];
var bf = new Buffer(10);

console.log( Buffer.isBuffer(arr) );//false
console.log( Buffer.isBuffer(bf) );//true
*/
/*
var str = 'avbd'
console.log(Buffer.byteLength(str)) //4*/

var buf1 = new Buffer('abcd');
console.log(buf1)
// <Buffer 61 62 63 64>
var buf2 = new Buffer('cde');
console.log(buf2)
// <Buffer 63 64 65>
var buf = Buffer.concat([buf1, buf2])
console.log(buf)
// <Buffer 61 62 63 64 63 64 65>
var buf = Buffer.concat([buf1, buf2],3)
console.log(buf)
// <Buffer 61 62 63>

var buf = buf1+buf2;
console.log(buf) //abcdcde