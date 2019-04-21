
const http = require('http');

const server =  http.createServer((req,res) => {

    if(req.url === '/'){

        res.write('Hello @Milo');
        res.end();

    } else if (req.url === '/api/courses'){

        res.write(JSON.stringify(['Milo','Node','JS']));
        res.end();
    }

});

server.listen('3000');

/*
//This is a socket connection
server.on('connection', (socket) => {
    console.log("New connection");
});

*/


console.log("Server running on port 3000....");