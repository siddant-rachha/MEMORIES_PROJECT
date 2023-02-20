import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express();

app.use(bodyParser.json({ limit: "30mb",extended:true }));
app.use(bodyParser.urlencoded({ limit: "30mb",extended:true }));
app.use(cors());



app.use('/posts', postRoutes);






const CONNECTION_URL = "mongodb+srv://memories-project:memories-project123@cluster0.oh7xu.mongodb.net/memories-project?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

main().catch(err => console.log(err));

async function main() {
    mongoose.set('strictQuery', false);
    await mongoose.connect(CONNECTION_URL);

    app.listen(PORT, () => console.log(`Server Running on ${PORT}`))

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}