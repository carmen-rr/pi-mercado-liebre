const db = require("../db/data");
const data = require("../database/models");
const { comentarios } = require("../db/data");
const op = data.Sequelize.Op;
//const bcryptjs = require ('bcryptjs')



const usuario = data.Usuario; 

const productos = data.Producto;

const userController = { 

    //RUTA DE PROFILE 
    profile: function(req,res){

     // if (req.session.user != undefined) {

      let id = req.params.id
      usuario.findByPk(id)
      .then(
        (result)=>{
          let usuarioPerfil = {
            usuario : result.usuario,
            contrasenia: result.contrasenia,
            email: result.email,
            dni: result.dni,
            fotoDePerfil: result.fotoDePerfil,
            id: id,
            //seguidores: result.seguidores,
            //comentarios: comentarios,

          }
         //res.send(usuarioPerfil)
         return res.render('profile', {perfil:usuarioPerfil})
          console.log(usuarioPerfil);
        }       
      )
   // }else{
   //   return res.render('login')
   // }

        
      }, 

    //RUTA DE PROFILE-EDIT  
    profileEdit:  function(req,res){

    let id = req.params.id
    usuario.findByPk(id)
    .then(
    (result)=>{
      let fechaFormateada = new Date(result.fechaDeNacimiento).toISOString().slice(0,10);
      let usuarioEdit = {
        usuario : result.usuario,
        contrasenia: result.contrasenia,
        email: result.email,
        fechaDeNacimiento: fechaFormateada,
        dni: result.dni,
        fotoDePerfil: result.fotoDePerfil,
        id: id,

      }
      
      
      return res.render('profile-edit', {usuarioEdit:usuarioEdit})



    })

    },  
    profileUpdate:  function (req,res) {
      let usuarioUpdate = req.body
      res.send(usuarioUpdate);
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
