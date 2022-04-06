const express = require('express');
const { render } = require('../app');
const router = express.Router();

const productController = require('../controllers/productController');

router.get ('/', function (req,res){
     return res.render('product')
})

router.get ('/add', function (req,res){
    return res.render('product-add')
})

module.exports = router; 