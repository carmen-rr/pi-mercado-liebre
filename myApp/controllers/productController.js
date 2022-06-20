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
        //Hago que solo se pueda acceder estando logueado

 if (req.session.user != undefined) {
            return res.render('product-add')
        } else {
            return res.render('login')
        }

    },
    
    store: (req, res) => {
    
        let errors ={};
       let info = req.body;
       let imagenNombre = req.file.filename;
       
        //Validacion de formularios de Register

       if(req.body.nombre == ''){ 
        errors.message = 'Nombre puede estar vacio';
        res.locals.errors = errors;
        return res.render('product-add');
       } else if(req.body.descripcion == ''){ 
        errors.message = 'Descripcion puede estar vacio';
        res.locals.errors = errors;
        return res.render('product-add');
       }else{
       
       
       let crearProducto =  {
        imagen: imagenNombre,
        nombre: info.nombre,
        descripcion: info.descripcion, 
        idUsuario :  1 // req.session.user.id   
       }

       productos.create(
        crearProducto
       )
       .then((result) => {
        return res.redirect("/")
       })
      
    }
    },
    //Evaluamos que el usaurio este en sesion para poder acceder.

    edit : ( req,res ) => {
        let id = req.params.id;
        res.render('product-edit')

    },

    update: ( req,res ) => {
        

    },
    
}



module.exports = productController;