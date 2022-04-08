const db = require("../db/data");

const productController ={
    //RUTA PRODUCT
    producto: (req, res) => {
        let detalleProducto = db.producto[1]
        res.render('product', {
            nombreProducto: detalleProducto

        });
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