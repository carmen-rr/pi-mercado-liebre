const db = require("../db/data");
const data = require("../database/models");

const productos = data.Producto; 
const comentarios = data.Comentario; 
const usuario = data.Usuario; 

const productController = {

    //RUTA PRODUCT
    producto: (req, res) => {
        let idProducto = req.params.id;
        console.log(idProducto)
       productos.findByPk(idProducto)
       .then(result => res.render('product', {
           producto: result
       }))
      
       
       /* res.render('product', {
            nombreProducto: db.producto[1], 
            commentProducto: db.comentarios,

        });*/
    },

    //RUTA PRODUCT-ADD
    agregarProducto: (req, res) => {
            res.render('product-add', {
             dataUsuario: db.usuario
        }); 

        let imagenProducto = req.file.filename;
      
    },
}



module.exports = productController;