const db = require("../db/data");

const productController ={
    //RUTA PRODUCT
    producto: (req, res) => {
        res.render('product');
    },

    //RUTA PRODUCT-ADD
    agregarProducto: (req, res)=>{
        let nombreUsuario = db.usuario
        res.render('product-add', {
        dataUsuario: nombreUsuario
        }); //acá lo estoy conectando con las vistas
    },
}

module.exports = productController