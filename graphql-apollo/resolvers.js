const authors = [{
    name: 'JK Rowling',
    age: 50,
    books: ['Harry Potter and the Goblet of Fire', 'Harry Potter and the Prisoner of Azkaban']
}, {
    name: 'George RR Martin',
    age: 70,
    books: ['Game of Thrones - Song of Ice and Fire', 'Game of Thrones - A Dance with Dragons']
}, {
    name: 'Stephen King',
    age: 70,
    books: ['The Green Mile', 'Carrie']
}];

const resolvers = {
    Query: {
        authors: () => {
            return authors
        },
        author: (root, args) => {
            const age = args.age;
            return authors.find(author => author.age === age);
        }
    }
}

export default resolvers;