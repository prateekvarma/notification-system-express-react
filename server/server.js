const http = require('http');

const app = require('./src/app');

const server = http.createServer(app);

server.listen(9000, () => {
    console.log('Listening on PORT 9000...');
})