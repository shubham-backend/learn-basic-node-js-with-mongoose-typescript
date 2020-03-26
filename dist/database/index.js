"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var mongoose_1 = __importDefault(require("mongoose"));
var uri = 'mongodb://localhost:27017/nodejs';
// import { MONGODB_URI } from "../.env";
console.log("uri ====> ", process.env.MONGODB_URI);
mongoose_1.default.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, }).then(function () {
    console.log('Successfully Connected to the MongoDB database.');
}).catch(function (err) {
    console.log('Error in connecting to the database');
    process.exit();
});
module.exports = mongoose_1.default;
