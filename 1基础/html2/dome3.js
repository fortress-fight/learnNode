var http = require('http');
var url = require('url');
var fs = require('fs');
var querystring = require('querystring');

var server = http.createServer();
var HtmlDir = __dirname + '/log/';

server.on('error', function () {
	console.log('error');
})

server.on('listening', function () {
	console.log('listening')
});

server.on('request', function (req, res) {

	var urlStr = url.parse(req.url);

	switch (urlStr.pathname) {
		case '/':
			sendData( HtmlDir+'index.html', req, res )
			break;
		case '/user':
            //用户首页
            sendData( HtmlDir + 'user.html', req, res );
            break;

        case '/login':
            //用户登录
            sendData( HtmlDir + 'login.html', req, res );
            break;

         case '/login/check':
            //console.log(req.method);
            console.log(urlStr);
            console.log( querystring.parse(urlStr.query) );

            if (req.method.toUpperCase() == 'POST') {

                var str = '';

                req.on('data', function(chunk) {
                	console.log(str,2)
                    str += chunk;
                })

                req.on('end', function() {
                	console.log(1)
                    console.log(str);
                    // username=12&password=12
                    console.log( querystring.parse( str ) );
                    // { username: '12', password: '12' }
                })


                res.end();

            }

            break;

		default:
			 sendData( HtmlDir + 'err.html', req, res );
			break;
	}

})


// 这里是利用fs模块，按照参数返回对应的 data

function sendData (path, req, res) {
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

server.listen(8080, 'localhost')