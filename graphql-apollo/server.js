import express from 'express';
import {graphqlExpress, graphiqlExpress} from 'apollo-server-express';
import bodyParser from 'body-parser';
const server = express();

console.log('changing the file!');

server.get('/', (req, res) => {
    res.send('<html> <body> <h1> Hello world </h1> </body> </html>')
});

server.use('/graphql', bodyParser.json(), graphqlExpress({}));

server.use('/graphiql', graphiqlExpress({
    endpointURL: "/graphql"
}));
server.listen(4001, () => {
    console.log('listening on port 4001');
});