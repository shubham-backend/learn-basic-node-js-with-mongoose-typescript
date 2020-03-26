"use strict";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// const uri: string = 'mongodb://localhost:27017/nodejs';
// //import { MONGODB_URI} from "../.env";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
var index_1 = __importDefault(require("./database/index"));
exports.BookSchema = new index_1.default.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true }
});
var Book = index_1.default.model('Book', exports.BookSchema);
exports.default = Book;
