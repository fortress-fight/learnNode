// console.log(process.argv)
// 
// console.log(process.env)
// console.log(process.pid)
// 
// console.log(process.title)
//C:\WINDOWS\system32\cmd.exe
//
// console.log(process.arch)
// 
//var a = process.cwd()
// console.log(a)
//D:\soft\wamp\www\GitHub\learnNode\1基础\html
//
/*
process.chdir('c:')
var a = process.cwd();
console.log(a)
//C:\*/

var a = process.memoryUsage()
console.log(a)

// { rss: 15785984, heapTotal: 6910248, heapUsed: 2511084 }