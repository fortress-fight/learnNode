var fs = require('fs');

var str = new Buffer('1234567')
// fs.writeFile('./3.txt', str, function(err){
// 	console.log(arguments)
// 	// { '0': null }
// })


/*
fs.appendFile(file, data, [options], function(args){
	// body
})*/
/*

fs.appendFile('./3.txt', str, function(err){
	console.log(arguments)
})*/

// fs.exists(path, function(args){
// 	// body
// })
/*fs.exists('./4.txt', function(err){
	console.log(arguments) 
	console.log(err)
	if (!err) {
		console.log(1)
		var str = new Buffer('这是后来创建的')
		fs.writeFile('./4.txt', str, function(err){
			console.log(arguments)
		})
	}
})*/
/*
fs.readFile(file, [options], function(args){
	// body
})*/

/*fs.readFile('./3.txt', function(err, buf){
	console.log(arguments)

	console.log(buf.toString())
})*/
// { '0': null,
  // '1': <Buffer 31 32 33 34 35 36 37 31 32 33 34 35 36 37> }
// 12345671234567

/*
fs.unlink(path, function(args){
	// body
})*/

/*fs.writeFile('./5.txt', '这里是测试unlink', function(){
	console.log(arguments)
})

fs.unlink('./5.txt', function(){
	console.log(arguments)
	console.log('文件已经删除')
})*/

// --------------------rename

/*fs.writeFile('6.txt', '这里是用来测试rename的', function(){
	
})

fs.rename('./6.txt', 'rename.txt', function(err){
	console.log(arguments)
})
*/

// ------------fs.watch

// fs.watch(filename, [options], [listener])

/*fs.writeFile('7.txt', '这里是用来测试fs.watch的', function(){
	
})

fs.watch('./7.txt', function (ev, ars,s) {
	console.log(ev,ars,s)
	// rename
})

fs.rename('./7.txt', './xiugaile', function(){
})
*/

// -------------------fs.mkdir


/*fs.mkdir(path, [mode], function(args){
	// body
})*/

/*fs.mkdir('./mkdir', function(err){
	console.log(arguments)
})
*/

// ------------fs.rmdir

/*fs.rmdir(path, function(args){
	// body
})*/
/*fs.rmdir('./mkdir', function(err){
console.log(arguments)	
})*/

// ----------fs.readdir
/*
fs.readdir(path, function(args){
	// body
})
*/
/*fs.readdir('./../html/', function(){
	console.log(arguments)
})


{ '0': null,
  '1': 
   [ '1.txt',
     '1node.js',
     '2.txt',
     '2node.js',
     '3.txt',
     '3require.js',
     '4.txt',
     '4require.js',
     '5module.js',
     '6exports.js',
     '7global.js',
     '8.1module.js',
     '8module.js',
     'Buffer.js',
     'Buffer2.js',
     'Buffer3.js',
     'Fs.js',
     'Fs方法.js',
     'process.js',
     'process_argv.js',
     'rename.txt',
     'stdout_stdin.js',
     'xiugaile' ] }
 


*/


// ----------------fs.stat

fs.mkdir('a', function(){
	
})

fs.readdir('./../html/', function(err, list){
	list.forEach(function (e, i) {
		fs.stat(e, function (err, infor) {
		/*	console.log(e)
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