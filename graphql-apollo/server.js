import express from 'express';

const server = express();

console.log('changing the file!');

server.get('/', (req, res) => {
    res.send('<html> <body> <h1> Hello world </h1> </body> </html>')
})
server.listen(4001, () => {
    console.log('listening on port 4001');
});