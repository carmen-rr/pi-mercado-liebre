const express = require('express');
const { render } = require('../app');
const router = express.Router();

const productController = require('../controllers/productController');

router.get ('/', productController.producto); 

router.get('/:id', productController.producto);

router.get ('/add', productController.agregarProducto)

module.exports = router; 