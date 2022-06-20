const express = require('express');
const router = express.Router();

//requeriendo módulos de multer y path
const multer = require('multer');
const path = require('path');

//configurando multer

let storage = multer.diskStorage({
    destination : function (req , file , cb) {
      cb( null, path.join (__dirname , '../public/images/products' ) )  
    },
    filename : function (req, file, cb) {
      cb( null , file.fieldname + '-' + Date.now () + path.extname(file.originalname) )
    },

});

let upload = multer({storage: storage})


const productController = require('../controllers/productController');

//router.get ('/', productController.producto); 

router.get('/detalle/:id', productController.producto);

router.get('/add', productController.create);

//FORM DE EDITAR UN PRODUCTO
router.get('/edit',productController.edit);

/* PROCESA EL FORMULARIO DE EDITAR UN PRODUCTO  */
router.post('/edit',productController.update);


router.post('/add', upload.single('imagenProducto'), productController.store)

module.exports = router; 