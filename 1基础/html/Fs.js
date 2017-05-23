

var fs = require('fs');
/*
fs.open(path, flags, [mode], function(args){
	// body
})*/

/*fs.open('./1.txt', 'r', function(){
	console.log(arguments)
})*/

// fs.openSync(path, flags, [mode])

/*fs.read(fd, buffer, offset, length, position, function(args){
	// body
})*/


/*fs.open('./1.txt', 'r', function(err, fd){
	var str = new Buffer('123456789')
	console.log(str)
	fs.read(fd, str, 7, 2, 1, function(err, length, newBuf){
	console.log(arguments)
		console.log(newBuf.toString())
	})
})*/

// fs.write(fd, buffer, offset, length, [position], function(args){
// 	// body
// })

//---------------------



/*fs.open('./2.txt', 'r+', function(err, fd){
	var str = new Buffer('array');
	fs.write(fd, str, 1, 2, function(err, length, newBuf){
		console.log(arguments)
		// { '0': null, '1': 2, '2': <Buffer 61 72 72 61 79> }
		console.log(newBuf.toString())
		// array
	})
})
*/

var str = new Buffer('哈哈哈哈')
fs.appendFile('./12.txt', str, function () {
	console.log(1);
	// console.log(arguments);
})
//
// fs.open('./12.txt', 'r+', function (err,fd) {
	// console.log(err);
	// fs.close(fd, function () {
	// 		console.log('已经执行')
	// 	})

	// fs.readFile('./12.txt',  function() {
	// 	console.log(arguments);
	// })
	// fs.rename('./12.txt', './change.txt', function() {
	// 	console.log(arguments);
	// })
	// fs.unlink('./12.txt', function(){
	// 	console.log(arguments);
	// })
// })
// fs.mkdir('./change1', function() {
// 	console.log(arguments);
// })
//
// fs.rmdir('./change1', function() {
// 	console.log(arguments);
// })


fs.readdir('./html/', function(err, list){
	console.log(list)
	list.forEach( function(e, i) {
		console.log(e)
		fs.stat(e, function (err, infor) {
			console.log(infor.mode)
		})
	});
})
