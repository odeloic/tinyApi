const http = require('http');

const requestHandler = function (request, response) {
    console.log('Received request for URL: ' + request.url);
    response.end('Hello World!');
}

const server = function (cb) {
    return http.createServer(cb);
};

module.exports = {
    handler: requestHandler,
    server
};