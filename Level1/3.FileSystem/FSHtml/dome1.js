var fs = require('fs');
// console.log(fs);
// fs.openSync()
// fs.open('./1.txt','r', function (err, fd) {
//     console.log(arguments);
//     // { '0': null, '1': 3 }
//     console.log(err);
//     // null
//     console.log(fd);
//     // 3
// });

// -------------- read

// fs.open('./1.txt','r', function (err, fd) {
// 	var str = new Buffer('123456')
// 	console.log(str)
// 	console.log(fd)
// 	fs.read(fd,str, 2, 3, 11, function (err, num ,buf) {
// 		console.log(arguments)
// 		// { '0': null, '1': 3, '2': <Buffer 31 32 e6 98 af 36> }
// 		console.log(buf.toString())
// 		// 12是6
// 	})
// });


// -----------write

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
// -----------close

// fs.open('./1.txt', 'r+', function (err, fd) {
// 	console.log('已经open')
// 	fs.close(fd, function (err) {
// 		console.log(arguments)
// 		console.log('已经执行close')
// 	})
// })
