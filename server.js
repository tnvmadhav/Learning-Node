var http = require("http");
var fs = require("fs");
var url = require("url");
var port = 3000;
var host = '127.0.0.1';

let server = http.createServer((request, response) => {
	var q = url.parse(request.url, true).query
	console.log("The First name is " + q.first_name + " and the last name " + q.last_name); 
	response.writeHead(200, {'Content-Type': 'text/html'});
	console.log("Done writing the response header for the request with request");
	fs.readFile('index.html', (err, data) => {
		if (err) {
			throw err;
			console.log("Error while reading file: ", err);
		}
	// Return the html content in the server response.
	response.end(data);	
	});
});

server.listen(port, host, (error) => {
	if (error) {
		console.log("Error encountered", error);
		return
	}
	console.log("Server is listening on " + host + " at port " + port);
});
