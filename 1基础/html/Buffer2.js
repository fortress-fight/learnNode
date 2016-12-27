/*var str = 'abcdefg'
console.log(new Buffer(str))
var buf = new Buffer(3)
*/
//buf.write(str)
// console.log(buf)
//<Buffer 61 62 63 64 65 66 67>
//<Buffer 61 62 63>
/*
buf.write(str, 2)
console.log(buf)
// <Buffer 61 62 63 64 65 66 67>
// <Buffer a0 81 61>*/
/*
buf.write(str,1,1)
console.log(buf)
// <Buffer 61 62 63 64 65 66 67>
// <Buffer 00 61 00>*/



// ----------------------
// // 
// var str = '哈哈哈';
// console.log(new Buffer(str))
// //<Buffer e5 93 88 e5 93 88 e5 93 88>

// var wr = new Buffer(5)
// wr.write(str, 1)
// console.log(wr)
// // <Buffer 66 e5 93 88 01>

// ---------------toString

/*var str = 'abcd哈哈哈'
var buf = new Buffer(str);
console.log(buf) //<Buffer 61 62 63 64 e5 93 88 e5 93 88 e5 93 88>
console.log(buf.toString()) //abcd哈哈哈
console.log(buf.toString('utf8', '1'))//bcd哈哈哈
console.log(buf.toString('utf8', 5))//��哈哈*/

//-------------toJSON

/*var str = 'abcd'
var buf = new Buffer(str)
console.log(buf.toJSON())
//{ type: 'Buffer', data: [ 97, 98, 99, 100 ] }*/

// ---------slice

/*var str = 'abcdef'
var buf = new Buffer(str);
console.log(buf)//<Buffer 61 62 63 64 65 66>
var bufSon = buf.slice(1, 4)
console.log(bufSon)//<Buffer 62 63 64>

bufSon.write('av');
console.log(bufSon)
console.log(buf)*/

// ----------copy

var buf = new Buffer('abcd');
console.log(buf)
// var b = buf;
var bufSon = new Buffer(buf)
buf.copy(bufSon, 0,0,1 )
// <Buffer 73 74 72>
console.log(bufSon)

console.log(process.cwd())