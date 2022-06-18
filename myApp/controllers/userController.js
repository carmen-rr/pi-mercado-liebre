const db = require("../db/data");
const data = require("../database/models");
const op = data.Sequelize.Op;
//const bcryptjs = require ('bcryptjs')



const usuario = data.Usuario; 
const productos = data.Producto;

const userController = { 

    //RUTA DE PROFILE 
    profile: function(req,res){
      if (req.session.user != undefined) {
        return res.render('product-add')
    } else {
        return res.render('login')
    }         
        
      }, 

    //RUTA DE PROFILE-EDIT  
    profileEdit:  function(req,res){
      if (req.session.user != undefined) {
        return res.render('profile-edit')
    } else {
        return res.render('login')
    }


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
