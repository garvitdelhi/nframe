
var nframe = require('nframe');

nframe.createServer(function($){
	$('res').end($('global').GET());
});

nframe.listen(8080);