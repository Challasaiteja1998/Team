const express = require('express');
const app = express();
const Routes = require('./routes/data.route')
const Routes1 = require('./routes/bucketdata.routes')
const Routes2 = require('./routes/gcldata.route')
const Routes3 = require('./routes/wroffdata.route')
app.use('/',Routes);
app.use('/',Routes1);
app.use('/',Routes2);
app.use('/',Routes3);
module.exports = app;