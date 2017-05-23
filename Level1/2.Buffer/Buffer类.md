# NodeJs -- Buffer

在NodeJs 中为了更好地操作2进制数据，引入了Buffer类

## 2.1 Buffer 简介

### 2.1.1 实例化Buffer

`var buf = new Buffer()`
>注： buffer 中存在length属性
> 返回由16进制信息；可以使用`String.fromCharCode()`的方式将其转换
> 可以使用下标获取，获取的到的是二进制，
> 如果需要写入，也只能是二进制

[DOME1](././BufferHtml/dome1.html)

1） `var buf = new Buffer(size) `

会根据 size 的大小，生成相应大小由16进制数组组成的对象，并随机生成其中的每一项；

```
var buf = new Buffer(4);
console.log(buf);
//<Buffer f8 f4 11 01>

console.log(typeof buf);
// object
```

2） var bufArr = new Buffer(Array)

```
var bufArr = new Buffer([1,2,3,4])
console.log(bufArr);
//<Buffer 01 02 03 04>
```

3) var bufStr = new Buffer(string[,encoding])

英文：
```
var bufStr = new Buffer('12123')
console.log(bufStr);
//<Buffer 31 32 31 32 33>
```

中文：
```
var bufStr = new Buffer('呵呵哈哈哈')
console.log(bufStr);
//<Buffer e5 91 b5 e5 91 b5 e5 93 88 e5 93 88 e5 93 88>
```

其中一个中文对应着3个字节
```
var p = '你好';
console.log(p.length); //2
console.log(new Buffer(p).length); //6
```

## 2.2 Buffer 实例的方法：

### 2.2.1 write()

在Buffer 的实例中写入内容
> 注： 这里是覆盖的写入方式，不是插入

语法：
`buf.write(string[,offset][,length][,encoding])`

string -- 要写入的内容，可以接受Buffer对象，
offset -- 偏移值 (在要被写入的buf中的起始位置)
length -- 长度 (要写入string的长度)
encoding -- 编码方式

```
var buf = new Buffer(5);
buf.write('1,2,3', '1', '3')
console.log(buf);
//<Buffer 00 31 2c 32 00>
```
从第一位开始写写出string的3位；

注：如果是中文的化，会将其先转化成3个字节，在计算位置

```
var ch = '这里是测试';
var bufCh = new Buffer(ch);
console.log(bufCh);
// <Buffer e8 bf 99 e9 87 8c e6 98 af e6 b5 8b e8 af 95>

bufCh.write('1', 1, 1)
console.log(bufCh);
// <Buffer e8 31 99 e9 87 8c e6 98 af e6 b5 8b e8 af 95>

console.log(bufCh.toString());
//�1�里是测试 这是由于插入的 1 将原有的‘这’ 所占有的3个字符拆开了
```

### 2.2.2 toString()
按照编码格式输出一个字符串

语法：`buf.toSting([encoding][,start][,end]):string`

>encoding -- 编码格式 默认 utf-8
start -- 转换的起始位置
end -- 转换的结束位置
返回 -- string

```
var bufToSt = new Buffer('abcdefg')
console.log(bufToSt.toString('utf-8', 4, 7))
//efg
```

### 2.2.3 toJSON

返回一个json格式的对象

语法： buf.toJSON()

```
var bufToJs = new Buffer('abcdefg');
console.log(bufToJs.toJSON());
// { type: 'Buffer', data: [ 97, 98, 99, 100, 101, 102, 103 ] }
```

### 2.2.4 slice()

从Buffer实例中截取
语法：`buf.slice([start][,end])`

```
var bufSlic = new Buffer('abcdefg');
console.log(bufSlic.slice(2, 4));
// <Buffer 63 64>
console.log(bufSlic.slice(2, 4).toString());
// cd
```

### 2.2.5 copy()

容易两个有长度的Buffer之间的转换
语法：`buf.copy(sonBuf[,start][,end]):num`

sonBuf -- 要填入的对象；
start -- 开始
end --结束
返回 -- num : 拷贝过去的长度

```
var bufCo = new Buffer('abcdefg')
var bufCo1 = new Buffer(10)
console.log(bufCo1); //<Buffer b6 ea 4d 19 02 00 00 00 00 00>
console.log(bufCo.copy(bufCo1));
console.log(bufCo1); //<Buffer 61 62 63 64 65 66 67 00 00 00>
```

## 2.3 Buffer 对象方法

[DOME3](././BufferHtml/dome3.js)

### 2.3.1 Buffer.isEncoding()
用于判断Buffer是否支持，输出的编码格式

语法：`Buffer.isEncoding(encodingString): boolean`

`console.log(Buffer.isEncoding('utf8')); // true`

### 2.3.2 Buffer.isBuffer()

判断对象是否是Buffer的实例

语法：`Buffer.isBuffer(obj): bloo`

```
var obj = {
    name:'ff',
    age:24
}
console.log(Buffer.isBuffer(obj)); // false
var buf = new Buffer(10);
console.log(Buffer.isBuffer(buf)); // true
```

### 2.3.3 Buffer.byteLength()

用于查看字符串转换成buffer对象后的长度

语法:
`Buffer.byteLength(string[,encoding]): num`


`console.log(Buffer.byteLength('哈哈哈')); // 9`

### 2.3.4 Buffer.concat()

用于连接两个字符串

语法：
`Buffer.concat(Array[,length]):buffer`

>Array: 一个数组，里面存放要连接的两个Buffer对象
Length: 要输出的总长度
返回： buffer对象

```
// ----------concat
var bufC1 = new Buffer('abc');
var bufC2 = new Buffer('123');
var bufC = Buffer.concat([bufC1, bufC2], 5);
console.log(bufC);
// <Buffer 61 62 63 31 32>
console.log(bufC.toString());
// abc12
```

### 2.4 隐式类型转换

在node中也存在隐式类型转换，比如'+'可以将两个Buffer对象连接起来并调用toSting 方法转换

```
var buf1 = new Buffer('abcd');
var buf2 = new Buffer('1234');
console.log(buf);
//abcd1234
```


















m
