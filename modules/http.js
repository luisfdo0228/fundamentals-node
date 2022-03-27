const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
    console.log('new request');
    console.log(req.url);

    switch (req.url) {
        case '/hello':
            res.write('Hello, how are you');
            res.end();
            break;
        default:
            res.write('Error 404: Not found');
            res.end();
        
    }

    // res.writeHead(201, {'Context-Type': 'text/plain'});
    // res.write('Hello');
    // res.end(); 
}



console.log("listen port 3000");