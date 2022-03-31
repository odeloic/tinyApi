/**
 * Application entry point
 */

const { handler, server } = require('./server');
const { port } = require('./config');

const _server = server(handler);
const start = function () {
    _server.listen(port, function () {
        console.log('Server started on port 3000');
    })
}

start();