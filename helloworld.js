/**
 * Created by rrobinson on 1/11/14.
 */
var http = require('http');

http.createServer(function(req, res){

    res.writeHead(200, {'content type' : 'text/plain'});

    res.end("Hello, World\n");
}).listen(8124);

console.log('Server running on 8124');