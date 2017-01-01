var objData = {
	'moduleName': 'ff',
	'data': [
		{
			'name': 'css',
			'type': 'dir'
		},
		{
			'name': 'js',
			'type': 'dir'
		},
		{
			'name': 'img',
			'type': 'dir'
		},
		{
			'name': 'index.html',
			'type': 'file',
			'content': '<head>\n\t<title></title>\n</head>'
		}
	]
};

var fs = require('fs');

if (objData.moduleName) {
	fs.mkdirSync(objData.moduleName);
	var data = objData.data;
	if (data && data.forEach) {
		data.forEach( function(f, i) {
			f.path = objData.moduleName + '/' + f.name;
			f.content = f.content || '';

			switch (f.type) {
				case 'dir':
					fs.mkdirSync(f.path);
					break;
				case 'file':
					fs.writeFileSync(f.path, f.content)
					break;
				default:
					// statements_def
					break;
			};
		});
	}
}