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

router.post('/add', upload.single('imagenProducto'), productController.store)

//FORM DE EDITAR UN PRODUCTO
router.get('/edit/:id',productController.edit);

/* PROCESA EL FORMULARIO DE EDITAR UN PRODUCTO  */
router.post('/edit/:id',upload.single('editarProducto'), productController.update);

/*ELIMINAR UN PRODUCTO*/
router.get('/delete/:id', productController.destroy);

/*MOSTRAR COMENTARIO*/
router.post('/detalle/:id', productController.comentario)





module.exports = router; 