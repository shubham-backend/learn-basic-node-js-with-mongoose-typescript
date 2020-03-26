// import mongoose from "mongoose";
// import dotenv from "dotenv";
// const uri: string = 'mongodb://localhost:27017/nodejs';
// //import { MONGODB_URI} from "../.env";

// mongoose.connect('mongodb://localhost:27017/nodejs', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false,}
// ).then(
//     () => {
//         console.log('Connected to the MongoDB database');
//     },
// ).catch(err => {
//     console.log('Error in connecting to the database');
//     process.exit();
// });

// export interface IBook extends mongoose.Document {
//     title: string;
//     author: string;
// }
import mongoose from './database/index';

export const BookSchema = new mongoose.Schema({
    title: {type:String,required:true},
    author: {type:String,required:true}
})

const Book = mongoose.model('Book', BookSchema);
export default Book;