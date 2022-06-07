const db = require("../db/data");
const data = require("../database/models");

const usuario = data.Usuario; 
const producto = data.Producto;

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

module.exports = userController; 
