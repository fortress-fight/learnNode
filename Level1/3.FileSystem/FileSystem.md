# FileSystem
用于处理文件或者是文件夹

## 3.1 FileSystem -- fs 模块的底层实现

注：fs模块下的方法，都有同步和异步两种，参数基本相同，只是同步使用回调确保执行顺序，同步没有回调

## 3.2 简介

在node中处理文件或者是文件夹的行为是交给 fs 模块完成的
使用时需要请求 fs 模块

`var fs = require('fs')`

>注：在这里路径中没有出现‘./’ 所以找的是node的核心模块

## 3.3 fs 模块的常用方法

### 3.3.1 open() || openSync()

语法：
`fs.open(path, flags[,mode],function(err, fd)):num`
`fs.openSync(path, flags[,mode]):num`

> path -- 路径
> flags -- 'r' 只读 / 'r+' 读写
> mode -- 编码格式
> function(){} -- 回调
> err -- 错误信息
> fd -- 文件标示

```
var fs = require('fs');
// console.log(fs);
fs.open('./','r', function (err, fd) {
    console.log(arguments); // { '0': null, '1': 3 }
    console.log(err); // null
    console.log(fd); // 3
});
```

### 3.3.2 read() || readSync()

将文件的内容读取出来，合并；
语法：
```
fs.read(fd, buffer, offset, length, [position], function(err, fd, newBuf){
  // body
})
```

> fd -- 文件的fd标示
> buffer -- 一个buffer对象，作为模板
> offset -- 在模板中插入文件内容的起始的位置
> length -- 从文件的取出内容的长度
> position -- 从文件摘取内容的起始位置
> err -- 错误信息
> fd -- 文件标示
> newBuf -- 结合后的buffer对象

```
fs.open('./1.txt','r', function (err, fd) {
    var str = new Buffer('123456')

    console.log(str)
    fs.read(fd,str, 2, 3, 11, function (err, num ,buf) {
        console.log(arguments)
        // { '0': null, '1': 3, '2': <Buffer 31 32 e6 98 af 36> }
        console.log(buf.toString())
        // 12是6
    })
});
```

>注：以 str 为模板，
>2 -- 代表着从模板的第二位接入1.txt 的内容，
>11 -- 从11开始
>3 -- 插入 3 位

### 3.3.3 write() || writeSync()

将js中的buffer对象，与外面的文件内容合并，并写入（长度以文件内容为主）；

语法：
```
fs.write(fd, buffer, offset, length, [position], function(err, fd, newBuf){
  // body
})
```

> fd -- 文件的fd标示
> buffer -- 一个buffer对象，作为模板
> offset -- 在模板中插入文件内容的起始的位置
> length -- 从文件的取出内容的长度
> position -- 从文件摘取内容的起始位置
> err -- 错误信息
> fd -- 文件标示
> newBuf -- 结合后的buffer对象


```
var str = new Buffer('123456789')
fs.open('./2.txt', 'r+', function (err, fd) {
    console.log(fd)
    fs.write(fd, str, 0, 1,function(err, length, newBuf){
    console.log(arguments)
    // { '0': null, '1': 2, '2': <Buffer 61 72 72 61 79> }
    console.log(newBuf.toString())
    // array
  })
})
// 2.txt 中 是abcdefg
// 在2.txt 中写入 1bcdefg
```
注：从第0位 插入 str 中 1 个长度的字符；和 read 相反的行为


### 3.3.4 close()

关闭open()

语法：
`fs.close(fd, function(err){})`

```
fs.open('./1.txt', 'r+', function (err, fd) {
    console.log('已经open')
    fs.close(fd, function (err) {
        console.log(arguments)
        console.log('已经执行close')
    })
})
```

## 3.4 FileSystem -- fs模块提供的方法

### 3.4.1 writeFile() || writeFileSync()
这里是向文件中写入内容

语法：
`fs.writeFile(path, Buffer[,options], function(err){})`
`fs.writeFile(path, Buffer[,options]) // 没有返回值`

> path: 写入文件的路径，如果找到就直接将内容覆盖写入
> Buffer： 一个buffer对象
> options: 写入的编码格式 默认 utf-8

```
var fs = require('fs');

var str = new Buffer('这里是writeFile')

fs.writeFile('./3.txt', str, function () {
    console.log(arguments)
    // { '0': null }
})
```

> 注：创建一个3.txt，然后在里面写入 这里是writeFile

### 3.4.2 fs.appendFile() || fs.appendFileSync()

向一个文件中加入内容
语法：
`fs.appendFile(path, Buffer[,options], function(err){})`

> path: 写入文件的路径，如果找到就直接将内容覆盖写入
> Buffer： 一个buffer对象
> options: 写入的编码格式 默认 utf-8


```
var str = new Buffer('这里是appendFile')
fs.appendFile('./4.txt', str, function () {
    console.log(arguments)
})

fs.appendFile('./4.txt', function () {
    var str = '这里是appendFile'
})

// 这里是writeFile这里是appendFilefunction () {
//  var str = '这里是appendFile'
// }
```

> 注：
> 1. 在文件内容后添加,每执行一次都会添加一次,具有和fs.writeFile相同的特点
> 2. 第二个参数都会输出

### 3.4.3 fs.exists() || fs.existsSync()
判断文件是否存在

语法：
`fs.exists(path, function(err){})`
`fs.exists(path) // 返回bloo`

> path -- 路径
> err -- bloo 目标文件是否存在

```
fs.exists('./5.txt', function (err) {
    console.log(err) // false;
})
```

```
fs.exists('./5.txt', function (err) {
    if (err) {
        var str = new Buffer('这里是后添加的信息')
        fs.appendFile('./5.txt', str, function () {
            console.log('已经append')
        })
    } else {
        var str = new Buffer('这里是初始化的字符串');
        fs.writeFile('./5.txt', str, function () {
            console.log('第一句')
        })
    }
})
```

### 3.4.4 fs.readFile() || fs.readFileSync()

读取文件的内容
语法：
```
fs.readFile(file[,options], function (err, buf) {})
fs.readFileSync(file[,options]) 返回 buf
```

> file -- 路径
> options -- 编码格式
> err -- 错误信息
> buf -- 文本内容转的buffer

```
fs.readFile('5.txt', function (err, buf) {
    console.log(arguments)
    console.log(buf.toString())
    // 这里是初始化的字符串  这里是后添加的信息
})

var str = fs.readFileSync('5.txt')
console.log(str.toString())
// 这里是初始化的字符串  这里是后添加的信息
```

### 3.4.5 fs.unlink() || fs.unlinkSync()

删除
语法：
```
fs.unlink(path, function(err){})
fs.unlinkSync(path) // 没有返回值
```

```
fs.exists('./6.txt', function  (err) {
    if (err) {
        fs.unlink('6.txt', function (err) {
            console.log('以被删除')
        })
    } else {
        var str = new Buffer('这里是测试unlink')
        fs.writeFile('6.txt', str, function () {
            console.log('以被添加')
        })
    }
})
```

### 3.4.6 rename() || renameSync()
更改文件名

语法：
```
fs.rename(oldPath, newPath, function(args){})
fs.rename(oldPath, newPath) // 没有返回值
```

```
fs.writeFile('./7.txt', '这里是测试rename', function () {
    console.log(arguments)
    fs.rename('./7.txt', './修改后的.txt', function () {
        console.log(arguments)
    })
})
```

### 3.4.7 fs.watch()

检测文件是否发生了 rename 或者 change

语法：
`fs.watch(filename, [options], [listener])`
事件，当文件改变的时候触发，其中回调里的参数，第一个参数在修改内容的时候显示change，修改名字的时候显示rename，第二个参数表示，文件名

```
fs.writeFile('./8.txt', '这里是测试watch', function (err) {
    console.log(arguments)
    fs.watch('./8.txt', function (arguments) {
        console.log(arguments) // rename || change
    })
    fs.rename('./8.txt', './修改后的watch.txt', function (err) {
        console.log(arguments)
    });
})
```
> 注：这个事件非常不稳定，使用前要先验证是否有效


### 3.4.8 fs.mkdir() || fs.mkdirSync()
创建文件夹

语法：
`fs.mkdir(path, [mode], function(err){})`
`fs.mkdirSync(path, [mode]) // 没有返回值`

```
fs.mkdir('./mkdir', function(err){
  console.log(arguments)
  `{ '0': null }`
})
```

### 3.4.9 fs.rmdir() || fs.rmdirSync()
删除文件夹

语法：
`fs.rmdir(path [,mode], function(err){})`
`fs.rmdirSync(path [,mode]) // 没有返回值 || undefined`

```
fs.mkdir('./rmdir', function () {
    fs.rmdir('./rmdir', function () {
        console.log(arguments)
    })
})
```

### 3.4.10 fs.readdir() || fs.readdirSync()
读取文件夹的内容

语法：
`fs.readdir(path, function(err, list){})`
`fs.readdirSync(path) // 返回list`

```
fs.mkdir('./readdir', function () {
    fs.writeFile('./readdir/1.txt', '这里是测试readdir', function () {
        fs.readdir('./readdir', function (err, list) {
            console.log(arguments)
        })
    })
})
```

```
fs.mkdir('./readdir', function () {
    fs.writeFile('./readdir/1.txt', '这里是测试readdir', function () {
        var str = fs.readdirSync('./readdir')
        console.log(str)
    })
})
```

首先在文件内存在一些内用：
list：
```
[ '1 - 副本 (2).txt',
 '1 - 副本 (3).txt',
 '1 - 副本 (4).txt',
 '1 - 副本.txt',
 '1.txt',
 'read1',
 'read1 - 副本',
 'read1 - 副本 (2)',
 'read1 - 副本 (3)',
 'read1 - 副本 (4)' ] }
```

### 3.4.11 fs.stat()
用于查找文件和文件夹的类型

其中文件夹为16822 而 文件为 33206

语法：
```
fs.stat(file, function (err, infor) {})
fs.statSync(file) // 返回infor
```


e代表文件夹或者是文件
其中第二个参数存有e的详细信息，其中存在一个mode，当文件夹时mode为16822 而 文件mode为 33206

```
fs.readdir('./', function (err, list) {
    list.forEach( function(e, i) {
        fs.stat(e, function (err, infor) {
            console.log(infor)
        })
    });
})
```


```
fs.readdir('./', function (err, list) {
    list.forEach( function(e, i) {
        var str = fs.statSync(e)
        console.log(str) // infor
    });
})
```


实例：
```
var fs = require('fs')
fs.readdir('./', function(err, list){
  list.forEach(function (e, i) {
    fs.stat(e, function (err, infor) {
    /*  console.log(e)
      console.log(infor)*/
      console.log(infor.mode)
      switch(infor.mode) {
        case 33206:
          console.log('[文件]'+ e);
        break;
        default:
          console.log(1)
      }
    })
  })
})

// 33206 [文件]1.txt 33206 [文件]2.txt 33206 [文件]3.txt 33206 ..............
```