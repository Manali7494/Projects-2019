import {makeExecutableSchema, addMockFunctionsToSchema} from 'graphql-tools';
const typeDefs = `type Author {
    age: Int
    name: String
    books: [String]
}`

const schema = makeExecutableSchema({typeDefs});

addMockFunctionsToSchema({schema});