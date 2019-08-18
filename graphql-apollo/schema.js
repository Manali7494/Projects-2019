import {makeExecutableSchema, addMockFunctionsToSchema} from 'graphql-tools';
import resolvers from './resolvers.js';
const typeDefs = `type Author {
    age: Int
    name: String
    books: [String]
}
    type Query {
        authors: [Author]
        author(age: Int): Author
    }
`;


const schema = makeExecutableSchema({typeDefs, resolvers});

export default schema;