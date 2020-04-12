const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv/config')
app.use(bodyParser.json());


const router = require('./router/web');
app.use(router);
mongoose.connect(process.env.DB_CONNECTION,
    { 
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    ()=> {
    console.log('Connected to the MongoDB Database');
});



app.listen(3000, ()=> console.log('Started on http://127.0.0.1:3000'));