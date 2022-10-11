const express = require('express');
const router3 = express.Router();

const wroffcontroller = require('../controllers/wroffdata.controller');
    router3.post('/wroff/insert',wroffcontroller.pushdata);
    router3.get('/wroff/get',wroffcontroller.getdata);
    router3.get('/wroff/:id',wroffcontroller.getbyiddata);
    router3.put('/wroff/update/:id',wroffcontroller.updatedata);
    router3.delete('/wroff/delete/:id',wroffcontroller.deletedata);

    module.exports = router3;