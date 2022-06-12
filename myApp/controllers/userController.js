const db = require("../db/data");
const data = require("../database/models");
const op = data.Sequelize.Op;


const usuario = data.Usuario; 
const productos = data.Producto;

const userController = { 

    //RUTA DE PROFILE 
    profile: function(req,res){
        return res.render('profile', {

          dataUsuario: db.usuario, 
          dataProducto: db.producto,
          
        })
      }, 

    //RUTA DE PROFILE-EDIT  
    profileEdit:  function(req,res){
      return res.render('profile-edit', {

        dataUsuario: db.usuario, 
      
      })
    },  
}; 


/* profileEdit:  function(req,res){
      let id = req.params.id; 
      usuario.findByPk(id)
      .then(
        (result)=>{
          return res.render('profile-edit', {

            dataUsuario: result, 
           
           })
        }
      )
      }, 
}; */ 

module.exports = userController; 
