const db = require("../db/data");

const userController = { 

    //RUTA DE PROFILE 
    profile: function(req,res){
        let nombreUsuario = db.usuario
        return res.render('profile', { 
          dataUsuario: nombreUsuario 
        })
      }, 

    //RUTA DE PROFILE-EDIT  
    profileEdit:  function(req,res){
        let nombreUsuario = db.usuario
        return res.render('profile-edit', {
        dataUsuario: nombreUsuario
        })
      }, 

}; 

module.exports = userController; 
