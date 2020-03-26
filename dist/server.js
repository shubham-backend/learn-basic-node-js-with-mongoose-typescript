"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = __importStar(require("dotenv"));
dotenv.config();
console.log('Hello TypeScript');
var bookController = __importStar(require("./controllers/bookController"));
var bodyParser = __importStar(require("body-parser"));
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.set("port", 3000);
var add = function (a, b) { return a + b; };
app.get('/', function (req, res, next) {
    console.log(add(4, 5));
    res.send('Hello');
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/books', bookController.allBooks);
app.get('/book/:id', bookController.getBook);
app.post('/book', bookController.addBook);
app.delete('/book/:id', bookController.deleteBook);
app.put('/book/:id', bookController.updateBook);
app.listen(3000, function () { return console.log("Server running http://localhost:%d", app.get('port')); });
