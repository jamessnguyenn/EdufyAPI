const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

require('dotenv').config();

app.use(express.json());
app.use(cors());

app.get('/', (req, res)=>{
    res.send('Welcome to the API');
});

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});
mongoose.connection.on('connected', ()=>{
    console.log("Successfully connected to MongoDB");
})
mongoose.connection.on('error', console.error.bind(console, 'Connection error:'));

app.listen(5000, (req,res)=>{
    console.log(`Backend server listening`);
})