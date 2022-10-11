const express = require('express');
const http = require('http');
const app = express();
const chalk = require('chalk');
const mongoose = require('./database/mongoose.connect');
const dotenv = require('dotenv');
dotenv.config();
mongoose.connect();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',require('./index'))
      
//const hostname = '192.168.199.192';
const port = process.env.PORT  ;


app.listen(port, ()=> {
    console.log(chalk.blue(`${process.env.APP} is running on ${port}/`))
});