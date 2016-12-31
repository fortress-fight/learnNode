var fs = require('fs');

fs.watch('./ff/source/', function (err, dir) {
	var arr = [];
	fs.readdir('ff/source/', function (err, list) {
		list.forEach( function(f, i) {
			if (f) {
				var infor = fs.statSync('./ff/source/'+ f);
				console.log(infor)
				if (infor.mode == 33206) {
					arr.push('./ff/source/'+f);
				}
			}
		});
		var content = '';
		arr.forEach( function(f, i) {
			content += fs.readFileSync(f).toString() + '\n'
		});

		fs.writeFile('ff/js/index.js', content)
	})
})