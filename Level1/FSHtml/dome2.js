var fs = require('fs');

// var str = new Buffer('这里是writeFile')

// fs.writeFile('./3.txt', str, function () {
// 	console.log(arguments)
// 	// { '0': null }
// })

// ------------appendFile

// var str = new Buffer('这里是appendFile')
// fs.appendFile('./4.txt', str, function () {
// 	console.log(arguments)
// })

// fs.appendFile('./4.txt', function () {
// 	var str = '这里是appendFile'
// })

// 这里是writeFile这里是appendFilefunction () {
// 	var str = '这里是appendFile'
// }

// -------------exists

// fs.exists('./5.txt', function (err) {
// 	console.log(err) // false
// })

// var str = fs.existsSync('./5.txt')
// console.log(str)

// fs.exists('./5.txt', function (err) {
// 	if (err) {
// 		var str = new Buffer('这里是后添加的信息')
// 		fs.appendFile('./5.txt', str, function () {
// 			console.log('已经append')
// 		})
// 	} else {
// 		var str = new Buffer('这里是初始化的字符串');
// 		fs.writeFile('./5.txt', str, function () {
// 			console.log('第一句')
// 		})
// 	}
// })

// ----------------readFile

// fs.readFileSync('5.txt', function (err, buf) {
// 	console.log(arguments)
// 	console.log(buf.toString())
// }))


// var str = fs.readFileSync('5.txt')
// function (err, buf) {
// 	console.log(arguments)
// 	console.log(buf.toString())
// })
// console.log(str.toString())
// 这里是初始化的字符串这里是后添加的信息

// ---------------unlink




// fs.exists('./6.txt', function  (err) {
// 	if (err) {
// 		var str = fs.unlinkSync('6.txt')
// 		function (err) {
// 			console.log('以被删除')
// 		}
// 	} else {
// 		var str = new Buffer('这里是测试unlink')
// 		fs.writeFile('6.txt', str, function () {
// 			console.log('以被添加')
// 		})
// 	}
// })

// fs.exists('./6.txt', function  (err) {
// 	if (err) {
// 		var str = fs.unlinkSync('6.txt')
// 		console.log('以被删除')
// 		console.log(str)
// 	} else {
// 		var str = new Buffer('这里是测试unlink')
// 		fs.writeFile('6.txt', str, function () {
// 			console.log('以被添加')
// 		})
// 	}
// })

// --------------rename

// fs.writeFile('./7.txt', '这里是测试rename', function () {
// 	console.log(arguments)
// 	fs.rename('./7.txt', './修改后的.txt', function () {
// 		console.log(arguments)
// 	})
// })


// ------------watch

// fs.writeFile('./8.txt', '这里是测试watch', function (err) {
// 	console.log(arguments)
// 	fs.watch('./8.txt', function (arguments) {
// 		console.log(arguments) // rename
// 	})
// 	fs.rename('./8.txt', './修改后的watch.txt', function (err) {
// 		console.log(arguments)
// 	});
// })

// -----------mkdir

// var str = fs.mkdir('./mkdir', function () {
// 	console.log(arguments)
// })

// -----------rmdir

// fs.mkdir('./rmdir', function () {
// 	fs.rmdir('./rmdir', function () {
// 		console.log(arguments)
// 	})
// })

// ------------readdir

/*fs.mkdir('./readdir', function () {
	fs.writeFile('./readdir/1.txt', '这里是测试readdir', function () {
		fs.readdir('./readdir', function (err, list) {
			console.log(arguments)
		})
	})
})*/

// fs.mkdir('./readdir', function () {
// 	fs.writeFile('./readdir/1.txt', '这里是测试readdir', function () {
// 		var str = fs.readdirSync('./readdir')
// 		console.log(str)
// 	})
// })



// -------------stat

// fs.readdir('./', function (err, list) {
// 	list.forEach( function(e, i) {
// 		fs.stat(e, function (err, infor) {
// 			console.log(infor)
// 		})
// 	});
// })


fs.readdir('./', function (err, list) {
	list.forEach( function(e, i) {
		var str = fs.statSync(e)
		console.log(str) // infor
	});
})

