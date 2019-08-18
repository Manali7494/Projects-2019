const authors = [{
    id: 21, 
    name: 'JK Rowling',
    age: 50,
    books: ['Harry Potter and the Goblet of Fire', 'Harry Potter and the Prisoner of Azkaban']
}, {
    id: 36,
    name: 'George RR Martin',
    age: 70,
    books: ['Game of Thrones - Song of Ice and Fire', 'Game of Thrones - A Dance with Dragons']
}, {
    id: 12,
    name: 'Stephen King',
    age: 70,
    books: ['The Green Mile', 'Carrie']
}];

const resolvers = {
    Query: {
        authors: () => {
            // return authors
        },
        author: (root, args) => {
            const id = args.id;
            // return authors.find(author => author.id === id);
        }
    }
}

export default resolvers;