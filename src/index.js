const http = require('http');

const server = http.createServer(( resquest, response) => {
   response.writeHead(200, {'content-type': 'text/html'});
   response.end('<h1> Hello World! </h1>');
});

server.listen(3000, () => console.log('🔥 server started at http://localhost:3000'));