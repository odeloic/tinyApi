const http = require('http');
const { URL, URLSearchParams } = require('url');

const requestHandler = function (request, response) {
    // method: request.method
    // url: request.url
    // headers: request.headers
    // body: request.body
    const url = new URL(request.url, 'http://localhost:3000', true);
    const { pathname } = url;
    const { method } = request;
    const params = new URLSearchParams(url.searchParams);
    if (pathname !== '/favicon.ico') {
        console.log(`trying to ${method} ${pathname} with params: ${params}`);
        switch (pathname) {
            case '/':
                response.end('Hello World!');
                break;
            case '/users':
                response.end('Users');
                break;
            default:
                response.end('Not found');
        }
    }
}

const server = function (cb) {
    return http.createServer(cb);
};

module.exports = {
    handler: requestHandler,
    server
};