const express = require('express');
const router2 = express.Router();

const gclcontroller = require('../controllers/gcldata.conrtroller');
    router2.post('/gcl/insert',gclcontroller.pushdata);
    router2.get('/gcl/get',gclcontroller.getdata);
    router2.get('/gcl/:id',gclcontroller.getbyiddata);
    router2.put('/gcl/update/:id',gclcontroller.updatedata);
    router2.delete('/gcl/delete/:id',gclcontroller.deletedata);

    module.exports = router2;