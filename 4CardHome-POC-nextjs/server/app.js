import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import card from './routes/card.route.js';
import bodyParser from 'body-parser';

const app = express();
const port = 8000;

dotenv.config();
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
})
// configure app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));


mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://zwebber:Ev1gohem!23@cluster0.hodph83.mongodb.net/?retryWrites=true&w=majority')
app.use('/api', card);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected to MongoDB");
});




app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
