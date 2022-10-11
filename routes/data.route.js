const express = require('express');
const router = express.Router();

const datacontroller = require('../controllers/data.controller');
    router.post('/data/insert',datacontroller.pushdata);
    router.get('/data/get',datacontroller.getdata);
    router.get('/data/:id',datacontroller.getbyiddata);
    router.put('/data/update/:id',datacontroller.updatedata);
    router.delete('/data/delete/:id',datacontroller.deletedata);

    module.exports = router;
