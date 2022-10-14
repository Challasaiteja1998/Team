
const express = require('express');
const router = express();
const categoryController =   require('../controllers/controllers');

router.get('/category', categoryController.findAll);

router.get('/category/:id', categoryController.findById);

module.exports=router;