import mongoose from "mongoose";
const uri: string = 'mongodb://localhost:27017/nodejs';
// import { MONGODB_URI } from "../.env";
console.log("uri ====> ", process.env.MONGODB_URI)
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false,}
).then(
    () => {
        console.log('Successfully Connected to the MongoDB database.');
    },
).catch(err => {
    console.log('Error in connecting to the database');
    process.exit();
});

export = mongoose;