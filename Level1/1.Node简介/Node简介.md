# Node 基础

## 1 Node 简介

JavaScript是一种脚本语言，运行需要依赖解析器；在使用 JavaScript 在浏览器运行，需要依赖 HTML （浏览器并不能直接解析 JavaScript）；
NodeJs 和 JavaScript 具有相同的语言风格，但是功能完全不同两种语言，NodeJs 可以说是 JavaScript 的解析器，可以独立运行 JavaScript；

在每一个解析器中，都允许 js 文件使用其提供的内置对象或者方法，例如：
 1. 浏览器 DOM操作中 提供的内置对象；
 2. NodeJs 中提供的 fs、http 等

### 1.1 NodeJs 和 JavaScript 的异同

NodeJs 只是其开发者实现自己的编程思想，选择的一种表达方式；

NodeJs 和 JavaScript 都是用了 ECMA 的规范:

[DOME1](..//Level1/html/dome1.js)

```
    var num = 100;
    console.log(num); // 100
    var date = new Date();
    console.log(date); // 2017-01-01T05:14:37.916Z
    var arr = [1,2,3,4,5,6];
    arr.push('add')
    console.log(arr); // [ 1, 2, 3, 4, 5, 6, 'add' ]

    function CreatePerson(name) {
        this.name = name;
    }
    CreatePerson.prototype.sayName = function () {
        console.log(this.name);
    };
    var person1 = new CreatePerson('xiaobai');
    person1.sayName(); // xiaobai
```
NodeJs 和 JavaScript 的不同：

1. 首先 JavaScript 的顶层对象是 window，NodeJs 的顶层对象是 global（在JavaScript中也存在global对象，但是不允许访问）
2. 在 js 中 通过'var' 声明的是全局对象（window 的对象），而在 NodeJs 中 通过 'var' 声明的仅在当前当前模块的作用域中；

例如：
[DOME2](./../Level1/html/dome2.js)

```
var a = require('./dome1.js')
//console.log(num); // num -- undefined
console.log(global.a); // undefined
```
注：  require('./dome1.js') -- 运行 dome1.js 其中在 dome1.js 'var num' 就在当前文件下访问不到；

### 1.2配置 NodeJs

下载地址： https://nodejs.org/en/download/ 建议下载.msi 的版本，提供的npm等。

配置编辑器：
1）sublime:
在sublime 中安装 nodejs插件，然后按照
http://www.cnblogs.com/qiaojie/p/5560388.html
的方式，进行修改；
如果需要使用node编译，ctrl + B,

### 1.3 运行
1. 运行 nodejs 或者 win+r 输入node
2. 命令行： win+r 加 cmd 输入 node， 退出 使用两次 ctrl + c

常用命令行：
cls -- 清屏
cd -- 路径
dir -- 目录

node -v 查看版本
运行文件，通过 node 路径 就可以运行
例如：`node D:\soft\wamp\www\GitHub\learnNode\1基础\html\1node.js`
3. 在编辑器中运行

## 2 require

使用 require 方法，在一个模块中加载另一个模块

[DOME2](./../Level1/html/dome2.js)
语法： `require('address')`
address --- 相对路径 || 绝对路径

>注：
相对路径：必须以 ‘./路径’ 的格式引入，如果没有 ‘./’ 就会指向node核心模块，或者去加载node目录下的 node_modules 文件夹内部的文件
绝对路劲：以/或C:之类的盘符开头

当需要查找一个文件的时候，node内部会遵循一定的方式去查找，以require('./2')为例

1. 查找文件名称为2的文件
2. 查找2.js文件
3. 查找2.json文件
4. 查找2.node文件
5. 报错

一旦查找到文件，就直接结束查找，并返回

## 3 module 和 exports

在node中一个模块就是一个作用域，如果模块1 想直接访问 模块2 的内容，是访问不到的；
[DOME2](./../Level1/html/dome2.js)
```
var a = require('./dome1.js')
//console.log(num); // num -- undefined
```
这时就需要引入 module

module 是当前模块的一个属性，保存在当前模块的当前信息；
`console.log(module)`

```
Module {
    id: '.',
    exports: {},
    parent: null,
    filename: 'D:\\soft\\wamp\\www\\GitHub\\learnNode\\基础\\html\\dome2.js',
    loaded: false,
    children:
    [ Module {
       id: 'D:\\soft\\wamp\\www\\GitHub\\learnNode\\基础\\html\\dome1.js',
       exports: {},
       parent: [Circular],
       filename: 'D:\\soft\\wamp\\www\\GitHub\\learnNode\\基础\\html\\dome1.js',
       loaded: true,
       children: [],
       paths: [Object] } ],
    paths:
    [ 'D:\\soft\\wamp\\www\\GitHub\\learnNode\\基础\\html\\node_modules',
     'D:\\soft\\wamp\\www\\GitHub\\learnNode\\基础\\node_modules',
     'D:\\soft\\wamp\\www\\GitHub\\learnNode\\node_modules',
     'D:\\soft\\wamp\\www\\GitHub\\node_modules',
     'D:\\soft\\wamp\\www\\node_modules',
     'D:\\soft\\wamp\\node_modules',
     'D:\\soft\\node_modules' ] }
```

在module 中存在一个属性：exports 对象，可以提供给外部访问

[DOME3](././html/dome3.js)
```
module.exports.str = '提供外部访问的';
console.log(module);
```
[DOME4](././html/dome4.js)
```
var more = require('./dome3.js');
console.log(more); // { str: '提供外部访问的' }
```

在局部模块中还存在一个属性： exports 指向 module.exports;

exports === module.exports
所以exports.a = 100 和 module.exports.a = 100 是相同的
>注：
不建议修改 module.exports ,如果修改了module.exports 就将破坏exports和module.exports的关联，对exports一样；

## 4 引入模块

1) 模块初始化
一个模块中的JS代码仅在模块第一次被使用时执行一次，并在执行过程中初始化模块的导出对象。之后，缓存起来的导出对象被重复利用。
[DOME5](././html/dome5.js)
```
var num = 1;
function addNum (){
    num ++;
    return num;
}
module.exports = addNum;
```
[DOME6](././html/dome6.js)
```
var addN = require('././dome5')
console.log(addN()); // 2
var addN1 = require('././dome5')
console.log(addN1()); //3
```

2)主模块

通过命令行参数传递给NodeJS以启动程序的模块被称为主模块。主模块负责调度组成整个程序的其它模块完成工作。

例如:
通过以下命令启动程序时，main.js就是主模块。
`$ node main.js`

## 5 global 对象

global 对象 -- 全局对象

### 5.1 `__filename` && ` __dirname`

属性：
1）`__filename` -- 表示当前编译后的绝对路径
2）`__dirname` -- 表示当前编译后的模块所在文件夹的绝对路径
3）ECMA对象

示例：
```
console.log(__filename)
// D:\soft\wamp\www\GitHub\learnNode\1基础\html\7global.js
console.log(__dirname)
// D:\soft\wamp\www\GitHub\learnNode\1基础\html
```

### 5.2 precess 对象

process 对象属于global对象，通过这个对象可以返回与当前运行程序相关的信息；
可以通过`console.log(process)`来查看

其中常用的属性：
[DOME7](././html/dome7.js)

1) argv
```
console.log(process.argv);
// [ 'C:\\Program Files\\nodejs\\node.exe',
//   'D:\\soft\\wamp\\www\\GitHub\\learnNode\\Level1\\html\\dome7.js' ]
```

2) env -- 环境信息

3) pid -- 信息值 // 可以在进程管理器中查看到pid
`//28340`

4) title -- 进程的名称
`//C:\WINDOWS\system32\cmd.exe`

5) stdin & stdout 输入输出流

[DOME8](././html/dome8.js)

1. `process.stdout.write('hello')`
2. 事件-- `process.stdin.on('data', function(chunk){})`
只有在输入完成后才会触发，一般认为回车是输入完成的标示，
chunk 是输入的内容

```
// process.stdout.write('hello')
// hellow
var a;
var b;

process.stdout.write('请输入a的值：');

process.stdin.on('data', function(chunk) {

    if (!a) {
        a = Number(chunk);
        process.stdout.write('请输入b的值：');
    } else {
        b = Number(chunk);

        process.stdout.write( '结果是：' + (a + b) );
    }

});
```

porcess 常用的方法：
1) cwd()
```
console.log(process.cwd());
//D:\soft\wamp\www\GitHub\learnNode\1基础\html2
```

2) chdir(directory) -- 改变当前进程的目录
```
process.chdir('c:')
var a = process.cwd();
console.log(a)
//C:\
```

3)memoryUsage() -- 返回node进程占用的内存
```
var a = process.memoryUsage()
console.log(a)

// { rss: 15785984, heapTotal: 6910248, heapUsed: 2511084 }
```

4) exit(code)退出

5) kill(pid) -- 向进程发送信息





















m
