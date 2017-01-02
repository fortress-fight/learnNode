var http = require('http');
var url = require('url');
var fs = require('fs');
var querystring = require('querystring');

var server = http.createServer();
var mainDir = __dirname + '/webExample/';

// fs.readdir('./webExample', function  (err, list) {
// 	console.log(list)
// })
// fs.writeFile('webExample/index.html', '这里是主页', function () {
// 	console.log(arguments)
// })
// fs.writeFile('webExample/user.html', '这里是用户页', function () {
// 	console.log(arguments)
// })
// fs.writeFile('webExample/error.html', '这里是错误页', function () {
// 	console.log(arguments)
// })
server.on('error', function () {
	console.log('error');
})

server.on('listening', function () {
	console.log('listening')
});

server.on('request', function (req, res) {
	res.setHeader('ff', 'nodejs')
	var urlStr = url.parse(req.url).pathname;
	var path = '';
	var data;
	switch (urlStr) {
		case '/':
			path = mainDir + 'index.html';
			break;
		case '/user':
			path = mainDir + 'user.html';
			break;
		case '/urser':
			path = mainDir + 'urser.html';
			var str = '';
			req.on('data', function (chuck) {
				console.log(chuck);
				// <Buffer 75 73 65 72 3d 31 31 26 61 67 65 3d 31 32>
				str += chuck;
			})
			req.on('end', function (chuck) {
				console.log(querystring.parse(str))
				// { user: '11', age: '12' }
			})
			/*req.on('data', function () {
				console.log(arguments[0].toString())
			})*/
		default:
			// statements_def
			break;
	}
	getData(path, req, res)
	res.setTimeout(10000)
})

function getData (path, req, res) {
	console.log(path)
	fs.readFile(path, function (err, data) {
		if (err) {
			res.writeHead(404, {
				'content-type': 'text/html; charset=utf-8'
			});
			res.end('<h1>页面被吃了</h1>')
		} else {
			res.writeHead(200, {
				'content-type': 'text/html; charset = utf-8'
			})
			res.end(data)
		}
	})
}
server.listen(8080)
