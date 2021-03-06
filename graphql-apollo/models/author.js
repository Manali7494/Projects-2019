import mongoose from 'mongoose';
import uuid from 'node-uuid';
const schema = mongoose.Schema;

const authorSchema = new schema({
    // name, age, book, and id
    id:{type: String, default: uuid.v1},
    name: String,
    // Number equivalent to Int 
    age: Number,
    books: [String]
});