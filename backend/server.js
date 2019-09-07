// server.js
const http = require('http')
const PORT = process.env.PORT || 9000
const server = http.createServer((req, res) => {
	console.log('New connection')
	res.end('Build with Bazel')
}).listen(PORT, console.log('Listening on localhost:' + PORT))
