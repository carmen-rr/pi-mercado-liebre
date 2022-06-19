const db = require("../db/data");
const data = require("../database/models");
const op = data.Sequelize.Op;
//const bcryptjs = require ('bcryptjs')



const productos = data.Producto; 
const comentarios = data.Comentario; 
const usuario = data.Usuario; 

const userController = { 

    //RUTA DE PROFILE 
    profile: function(req,res){
      if (req.session.user != undefined) {
        return res.render('profile')
    } else {
        return res.render('login')
    } 

    /*

    db.Movie.findAll({
      include: [
        {association: "genre"},
        {association: "actors"}
        ]
      }).then(resultados=>{ 
        //nuestro código
       })    */    
        
      }, 

    //RUTA DE PROFILE-EDIT  
    profileEditCreate:  function(req,res){
      let idEditar = req.params.id
      if (req.session.user != undefined) {
        return res.render('profile-edit')
    } else {

    usuario.findByPk(idEditar)
       .then((result) => { /*muestro sus datos xa poder editar*/
       let usuarioEditado = {
        id: result.dataValues.id,
        usuario :result.dataValues.usuario,
        contrasenia: passEncriptada,
        email: result.dataValues.email,
        fechaDeNacimiento: result.dataValues.fechaDeNacimiento,
        dni:result.dataValues.dni,
        fotoDePerfil: req.file.filename,
        }

 
          return res.render('profile-edit', {
               usuario: usuarioEditado
               
           })
       })
        }
  
    },  

    profileEditStore: function (req,res){
      let idEditar = req.params.id
     
      let usuarioEditado = {
        usuario : req.body.usuario,
        contrasenia: req.body.passEncriptada,
        email: req.body.email,
        fechaDeNacimiento: req.body.fechaDeNacimiento,
        dni: req.body.dni,
        fotoDePerfil: req.body.filename,
        updatedAt : req.body.updatedAt
 

      }
      
      //console.log(usuarioCreado);
      usuario.update(
        usuarioEditado 

      )
      
      .then((result) =>{
        return res.redirect("/user/profile")
      })//.catch(err =>{console.log(err)})

      }

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
