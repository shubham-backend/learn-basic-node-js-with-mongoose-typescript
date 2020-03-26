import * as dotenv from 'dotenv';
dotenv.config();
console.log('Hello TypeScript');
import * as bookController from './controllers/bookController';
import * as bodyParser from 'body-parser';
import * as  multer from 'multer';
import express, {Application,Request,Response,NextFunction} from 'express';
const app: Application = express();

app.set("port",3000);
const add = (a:number, b:number) : number => a+b;
app.get('/', (req : Request,res: Response, next:NextFunction) => {
    console.log(add(4,5))
    res.send('Hello');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/books', bookController.allBooks);
app.get('/book/:id', bookController.getBook);
app.post('/book', bookController.addBook);
app.delete('/book/:id', bookController.deleteBook);
app.put('/book/:id', bookController.updateBook);

app.listen(3000,() => console.log("Server running http://localhost:%d",app.get('port')))