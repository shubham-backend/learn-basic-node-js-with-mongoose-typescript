"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var book_1 = __importDefault(require("./../book"));
// - GET - /books # returns all books
exports.allBooks = function (req, res) {
    var books = book_1.default.find(function (err, books) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(books);
        }
    });
};
// - GET - /book/1 # returns a book with id 1
exports.getBook = function (req, res) {
    book_1.default.findById(req.params.id, function (err, book) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(book);
        }
    });
};
// - POST - /book # inserts a new book into the table
exports.addBook = function (req, res) {
    console.log(req.body);
    var book = new book_1.default(req.body);
    book.save(function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(book);
        }
    });
};
// - DELETE - /book/1 # deletes a book with id of 1
exports.deleteBook = function (req, res) {
    book_1.default.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully deleted the book.");
        }
    });
};
// - PUT - /book/1 # updates a book with id of 1
exports.updateBook = function (req, res) {
    console.log("REQ>BODY ===> ", req.body);
    book_1.default.findByIdAndUpdate(req.params.id, req.body, function (err, book) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully updated book.");
        }
    });
};
