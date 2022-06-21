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


     /* usuario.findByPk(id)
      data.Usuario.findByPk(id, 
        {include:[
          {association: 'productoUsuario'}
        ]})
      .then(
        (result)=>{
          let data = {
            usuario : result.usuario,
            contrasenia: result.contrasenia,
            email: result.email,
            dni: result.dni,
            fotoDePerfil: result.fotoDePerfil,
            id: id,
          }


        res.send(result)
        //return res.render('profile', {result:result})

          }
      )

      */

      
      data.Usuario.findByPk(id, 
        {include:[
          {association: 'productoUsuario'}
        ]})
      .then(
        (result)=>{

        console.log(result)
         
        // res.render ('profile', {
         // result : result 
          //})

        



        }
        )
  

            //seguidores: result.seguidores,
            //comentarios: comentarios,

//
          /*if (fotoDePerfil = undefined) {
            fotoDePerfil = '/images/users/default-image.png'
          }else{
            fotoDePerfil = fotoDePerfil
          }
          */

               
      
   // }else{
   //   return res.render('login')
   // }

        
      }, 

    //RUTA DE PROFILE-EDIT  
    profileEdit:  function(req,res){

    let id = req.params.id
    let mensaje = 'Este no es tu usuario'

    if (req.session.user.id == id) {

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
    }else{

      return res.redirect('/user/profile/'+ id)

    }

    },  
    profileUpdate:  function (req,res) {
      let usuarioUpdate = req.body
      let idUpdate = req.params.id
      let imagenUpdateada = req.file.filename

      usuario.update(
        {
        usuario : usuarioUpdate.usuario,
        contrasenia: usuarioUpdate.contrasenia,
        email: usuarioUpdate.email,
        fechaDeNacimiento: usuarioUpdate.fechaDeNacimiento,
        dni: usuarioUpdate.dni,
        fotoDePerfil: usuarioUpdate.imagenUpdateada,
        },
        {
          where:[
              { id: idUpdate }
          ]
      }
      .then((result) => {
        return res.redirect('/user/profile/'+ id)
    })
      )

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
