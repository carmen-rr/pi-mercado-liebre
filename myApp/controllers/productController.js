const db = require("../db/data");
const data = require("../database/models");
const op = data.Sequelize.Op;


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
      
       /* 
        {association: 'comentario_producto', include: [{association:'usuario'}]}
        */
       
       /* res.render('product', {
            nombreProducto: db.producto[1], 
            commentProducto: db.comentarios,

        });*/
    },

    //RUTA PRODUCT-ADD.
    
    create: (req, res) => {
        return res.render('product-add');
    },
    
    store: (req, res) => {
       let info = req.body;
       let imagenNombre = req.file.filename;
       let crearProducto =  {
        imagen: imagenNombre,
        nombre: info.nombre,
        descripcion: info.descripcion, 
        id_usuario :  1// req.session.user.id   
       }

       productos.create(
        crearProducto
       )
       .then((result) => {
        return res.redirect("/")
       })
      
    },
}



module.exports = productController;