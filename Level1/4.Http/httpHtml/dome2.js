// var url = require('url');
// console.log(url)
// // { parse: [Function: urlParse],
// //   resolve: [Function: urlResolve],
// //   resolveObject: [Function: urlResolveObject],
// //   format: [Function: urlFormat],
// //   Url: [Function: Url] }

// -------------------- 路由
// var http = require('http');
// var url = require('url');
// var server = http.createServer()

// server.on('listening', function () {
//     console.log('listening');
// });

// server.on('error', function () {
//     console.log('error');
// });

// server.on('request', function (req, res) {
//     console.log(req.url);// /favicon.ico
//     console.log(url.parse(req.url));
//     // Url {protocol: null,slashes: null,auth: null,host: null,port: null,
//     // 	hostname: null,hash: null,search: null,query: null,pathname: '/favicon.ico',path: '/favicon.ico',href: '/favicon.ico' }
//     res.end()
// })

// server.listen(8080)

// ----------------parse -- pathname


var http = require('http');
var url = require('url');

var server = http.createServer()

server.on('listening', function () {
    console.log('listening');
});

server.on('error', function () {
    console.log('error');
});

server.on('request', function (req, res) {
	res.setHeader('ff','nodejs');
	res.writeHead(200, 'nodejs', {
		'content-type': 'text/html; charset=utf8'
	})
	var urls = url.parse(req.url).pathname;
	console.log(urls)// /favicon.ico

	switch (urls) {
		case '/':
			res.write('这里是首页')
			break;
		case '/user':
			res.write('这里是user页')
			break;
		case '/user/file':
			res.write('这里是user页下的file')
			break;
		default:
			res.write('这里没有子页面')
			break;
	}

    res.setTimeout(10000);
    res.end();
})

console.log(setData)
server.listen(8080)