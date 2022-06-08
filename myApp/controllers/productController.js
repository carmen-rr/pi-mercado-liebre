const db = require("../db/data");
const data = require("../database/models");

const producto = data.Producto; 
const comentarios = data.Comentario; 
const usuario = data.Usuario; 

const productController = {

    //RUTA PRODUCT
    producto: (req, res) => {
        let idProducto = req.params.id;
        console.log(idProducto)
       producto.findByPk(1).then(data => res.send(data))
      
       
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
    },
}



module.exports = productController;