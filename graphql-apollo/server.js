import express from 'express';
import {graphqlExpress, graphiqlExpress} from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './schema.js';
import mongoose from 'mongoose';
const server = express();

console.log('changing the file!');


mongoose.connect('mongodb://localhost/graphqlTutorial', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', (err) => {
    console.log('connection to db was successful');
    console.log(err);
});
server.get('/', (req, res) => {
    res.send('<html> <body> <h1> Hello world </h1> </body> </html>')
});

server.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

server.use('/graphiql', graphiqlExpress({
    endpointURL: "/graphql"
}));
server.listen(4001, () => {
    console.log('listening on port 4001');
});