var fs = require('fs');

var data = [
	{
		content: 'function e2 (){alert(1)}'
	},
	{
		content: 'function e2 (){alert(2)}'
	}
]

fs.mkdir('./example2', function (err) {
	if (err) {
		fs.writeFile('./example2/index.js', data[0].content)
		fs.writeFile('./example2/index1.js', data[1].content)
	}
	fs.watch('./example2', function (err, dir) {
		var arr = [];
		fs.readdir('./example2', function (err, list) {
			list.forEach( function(f, i) {
				if (f) {
					var infor = fs.statSync('./example2/'+f);
					console.log(infor.mode)
					if (infor.mode == 33206) {
						arr.push('./example2/'+f)
					}
				}
			});
			var content = '';
			arr.forEach( function(f, i) {
				content += fs.readFileSync(f).toString()+'\n';
			});
			fs.writeFile('./content.js', content)
		})
	})

})


