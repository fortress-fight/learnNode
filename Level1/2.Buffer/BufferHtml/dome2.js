var buf = new Buffer(5);
buf.write('1,2,3', '1', '3')
console.log(buf);
//<Buffer 00 31 2c 32 00>

var ch = '这里是测试';
var bufCh = new Buffer(ch);
console.log(bufCh);
// <Buffer e8 bf 99 e9 87 8c e6 98 af e6 b5 8b e8 af 95>

bufCh.write('1', 1, 1)
console.log(bufCh);
// <Buffer e8 31 99 e9 87 8c e6 98 af e6 b5 8b e8 af 95>

console.log(bufCh.toString());
//�1�里是测试 这是由于插入的 1 将原有的‘这’ 所占有的3个字符拆开了

//-----------------

var bufToSt = new Buffer('abcdefg')
console.log(bufToSt.toString('utf-8', 4, 7))
//efg

// --------------

var bufToJs = new Buffer('abcdefg');
console.log(bufToJs.toJSON());
// { type: 'Buffer', data: [ 97, 98, 99, 100, 101, 102, 103 ] }

// ------------ slice

var bufSlic = new Buffer('abcdefg');
console.log(bufSlic.slice(2, 4));
// <Buffer 63 64>
console.log(bufSlic.slice(2, 4).toString());
// cd

// ----------copy

var bufCo = new Buffer('abcdefg')
var bufCo1 = new Buffer(10)
console.log(bufCo1); //<Buffer b6 ea 4d 19 02 00 00 00 00 00>
console.log(bufCo.copy(bufCo1));
console.log(bufCo1); //<Buffer 61 62 63 64 65 66 67 00 00 00>
