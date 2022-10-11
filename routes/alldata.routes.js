const express = require('express');
const alldatacontroller = require('../controllers/alldata.controller');
const router4 = express.Router();

//const alldatacontroller = require('../controllers/alldata.controller');
   
    router4.get('/alldata/get',alldatacontroller.getdata);
    router4.get('/alldata/:id',alldatacontroller.getbyiddata);
   

    module.exports = router4;