const authors = [{
    name: 'JK Rowling',
    age: 50,
    books: ['Harry Potter and the Goblet of Fire', 'Harry Potter and the Prisoner of Azkaban']
}, {
    name: 'George RR Martin',
    age: 70,
    books: ['Game of Thrones - Song of Ice and Fire', 'Game of Thrones - A Dance with Dragons']
}];

const resolvers = {
    Query: {
        author: () => {
            return authors
        }
    }
}

export default resolvers;