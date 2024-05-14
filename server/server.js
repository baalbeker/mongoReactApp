import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(cors());
app.use('/users', userRoutes)

mongoose.connect("mongodb+srv://samuilmnt:turin554@mongosami.2i6exke.mongodb.net/sami_database?retryWrites=true&w=majority&appName=mongoSami")
  .then(() => {
    console.log("Successful Connection to the db");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});