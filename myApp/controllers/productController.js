const db = require("../db/data");

const productController = {

    //RUTA PRODUCT
    producto: (req, res) => {
        res.render('product', {
            nombreProducto: db.producto[1], 
            commentProducto: db.comentarios,

        });
    },

    //RUTA PRODUCT-ADD
    agregarProducto: (req, res) => {
            res.render('product-add', {
             dataUsuario: db.usuario
        }); 
    },
}

module.exports = productController;