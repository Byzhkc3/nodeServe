var http = require('http'); 
var url = require('url'); 

function start(router,handle){
	function onReauest(request,response){
		var pathname = url.parse(request.url).pathname;
		console.log('get:'+pathname);
		router(handle,pathname,response,request);
		
	}

	http.createServer(onReauest).listen(8080);
	console.log('server start');
}


exports.start = start;