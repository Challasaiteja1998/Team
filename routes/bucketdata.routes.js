const express = require('express');
const bucketdataController = require('../controllers/bucketdata.controller');
const router1 = express.Router();

const bucketdatacontroller = require('../controllers/bucketdata.controller');
    router1.post('/bucket/insert',bucketdataController.pushdata);
    router1.get('/bucket/get',bucketdataController.getdata);
    router1.get('/bucket/:id',bucketdataController.getbyiddata);
    router1.put('/bucket/update/:id',bucketdataController.updatedata);
    router1.delete('/bucket/delete/:id',bucketdataController.deletedata);

    module.exports = router1;