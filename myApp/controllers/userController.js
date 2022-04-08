const db = require("../db/data");

const userController = { 

    //RUTA DE PROFILE 
    profile: function(req,res){
        let nombreUsuario = db.usuario //todo lo que quiero que aparezca de la db en la vista
        let nombreProducto = db.producto;
        return res.render('profile', {
          dataUsuario: nombreUsuario, //identificar que esta toda la info del usuario Nombre usuario tiene el contenido
          dataProducto: nombreProducto,
        })
      }, 

    //RUTA DE PROFILE-EDIT  
    profileEdit:  function(req,res){
        let nombreUsuario = db.usuario;
        return res.render('profile-edit', {
        dataUsuario: nombreUsuario, 
        
        })
      }, 

}; 

module.exports = userController; 
