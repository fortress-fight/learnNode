var http = require('http');
var url = require('url');
var server = http.createServer();

server.on('error', function () {
	console.log('error')
});
server.on('listening', function(){
	console.log('listening')
});


server.on('request', function (req, res) {
	// console.log(req);
	console.log(req.url);
	console.log(req.method);
	console.log(url.parse(req.url))


	res.setHeader('ff', 'nodejs');
	res.writeHead(200, 'nodejs', {
		'content-type': 'text/html; charset=utf-8'
	});
	
	var urls = url.parse(req.url).pathname;

	switch (urls) {
		case '/':
			res.write('这里是首页');
			break;
		case '/user':
			res.write('这里是用户界面');
			break;
		default:
            res.write('<h1>页面被LEO吃掉了</h1>');
			break;
	}

	res.setTimeout(10000);
	res.end()
})

server.listen(8080, 'localhost');











