var http = require('http');
// console.log(http')


var server = http.createServer();
// console.log(server)
// console.log(server.address())
//{ address: '::', family: 'IPv6', port: 54115 }
server.on('error', function (ev) {
	console.log('error')
})
server.on('listening', function () {
	console.log('listening')
})

server.on('request', function  (req, res) {
	// console.log(req.headers)
	// console.log(req.url)
	// console.log(req.method)
	res.setHeader('ff', 'nodejs')
	res.writeHead(200, 'nodejs', {
		// 'content-type': 'text/html; charset:utf-8'
        'content-type' : 'text/html;charset=utf-8'

	})
	res.write('<h1>哈哈哈哈</h1>');
	res.end('<h2>呜呜呜呜</h2>')

	res.setTimeout(10000);
})

server.listen(8080, 'localhost');
