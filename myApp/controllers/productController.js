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
       
        
      productos.findByPk(idProducto, {
        include: [{
            order: [[ "createdAt" , "DESC"]],
            association: "comentariosProducto",
            include: [{
            association: "usuarioComentarios"
           }]
          }]
        })
       
        .then((result) => {
           // return res.send(result)
            return res.render("product", {
            producto: result
            });
            res.send(result)
          })
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
    
       let errors = {};
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
    //   }else if(imagen = 'filename') {
    //     errors.message = 'imagen no puede estar vacio';
    //     res.locals.errors = errors;
    //    return res.render('product-add')
       }else{

       let crearProducto =  {
        imagen: imagenNombre,
        nombre: info.nombre,
        descripcion: info.descripcion, 
        idUsuario :  req.session.user.id // req.session.user.id   
       }
       //insertando los datos de un producto creado en la tabla de productos
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
       
        if (req.session.user != undefined) {
        
        
        let id = req.params.id; 
      
        productos.findByPk(id)
        .then(
            (result)=> { 

            let product = {
                imagen: result.imagen,
                nombre: result.nombre,
                descripcion: result.descripcion, 
                //idUsuario :  1,  req.session.user.id
                updateAt : new Date() , 
                id:id           
            } 

            return res.render('product-edit', {productos : product})

            }
        )
        
    } else {
        return res.render('login')
    }
    },

    update: ( req,res ) => {
        let resultUpdate = req.body 
        let idUpdate  = req.params.id; // este es el id que me llego por parametro
        let imagenUpdateada = req.file.filename;

        productos.update(
            {   imagen: imagenUpdateada,
                nombre: resultUpdate.nombre,
                descripcion: resultUpdate.descripcion,
                updateAt : new Date ()  
            },
            {
                where:[
                    { id: idUpdate }
                ]
            }
        )
        .then((result) => {
            return res.redirect('/')
        })

    },

    comentario: ( req,res ) => {

        if (req.session.user != undefined) {

        let infoComentario = req.body;

        let comentario = {
            textoDeComentario : infoComentario.texto,
            idUsuario : req.session.user.id, // id del usuario logueado
            idProducto : req.params.id //trae el id de la ruta del producto 

        }

        comentarios.create(comentario)
        .then((result) => {
            return res.redirect ('/product/detalle/' + req.params.id) // req.params.id: le estoy diciendo que me redireccione de nuevo al id del producto que clicke
        })

    }else{
        res.render('login');
    }
    
    },
    
    destroy: (req, res) => {

        if (req.session.user != undefined) {

        let productoEliminar = req.params.id;
        productos.destroy(  {

            where:[{ id : productoEliminar}]

        }  )
        .then((result) => {
            return res.redirect('/')
        })
    
    } else {
        return res.render('login')
    }
}
}

module.exports = productController;