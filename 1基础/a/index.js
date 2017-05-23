var objectData = {
	'name': 'ff',
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
			'content': '<head>\n\t<title></title>\n\t\t</head>'
		}
	]
};

var fs = require('fs');

if (objectData.name) {
	fs.mkdirSync(objectData.name);
	data = objectData.data;

	if (data && data.forEach) {
		data.forEach( function(f, i) {
			f.path = objectData.name + '/' + f.name;
			f.content = f.content || '';

			switch (f.type) {
				case 'dir':
					fs.mkdirSync(f.path);
					break;
				case 'file':
					fs.writeFileSync(f.path, f.content)
				default:
					// statements_def
					break;
			}

		});
	}
};