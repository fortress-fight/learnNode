// var http = require('http');

// var server = http.createServer(function () {
// 	console.log(1)
// })
// console.log(server)
// server.listen(8080);
// console.log(server.address())
// { address: '::', family: 'IPv6', port: 49152 }

// ---------------error
//
// var http = require('http');
// var server = http.createServer();
// server.on('error', function (ev) {
//     console.log('error');
// })
// server.on('listening', function (ev) {
// 	console.log('listening')
// })
//
// server.listen(8080, 'localhost')
// // console.log(server.address());


// ------------request -- req

// var http = require('http')
// var server = http.createServer();
// server.on('listing', function () {
// 	console.log('listing')
// })
// server.on('error', function () {
// 	console.log('error');
// })
// server.on('request', function (req, res) {
//     console.log(req.httpVersion); //1.1
//     console.log(req.headers);
// // { host: 'localhost:8082',
// // connection: 'keep-alive',
// // 'upgrade-insecure-requests': '1',
// // 'user-agent': 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36',
// // accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
// // 'accept-encoding': 'gzip, deflate, sdch',
// // 'accept-language': 'zh-CN,zh;q=0.8' }
//     console.log(req.url); //  /favicon.ico
//     console.log(req.method) // GET
//     res.end();
// })
//
// server.listen(8080, 'localhost')

// --------------------request -- res

var http = require('http');
var server = http.createServer();
server.on('listening', function () {
	console.log('listening');
});
server.on('error', function () {
	console.log('error');
});
server.on('request', function (req, res) {
	res.setHeader('ff', 'nodejs')
	res.writeHead(200, 'node', {
		'content-type':'text/html; charset=utf8'
	})
	res.write('哈哈哈哈');
	res.end()
})
server.listen(8080)
