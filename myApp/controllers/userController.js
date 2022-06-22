const db = require("../db/data");
const data = require("../database/models");
const { comentarios } = require("../db/data");
const op = data.Sequelize.Op;
//const bcryptjs = require ('bcryptjs')

const usuario = data.Usuario; 
const productos = data.Producto;
const seguir = data.Seguir;

const userController = { 

    //RUTA DE PROFILE 
    profile: function(req,res){

     // if (req.session.user != undefined) {

      let id = req.params.id

      
      data.Usuario.findByPk(id, 
        {include:[
          {association: 'productoUsuario'}
        ]})
      .then(
        (result)=>{

        //console.log(result)
         
        res.render ('profile', {
        result : result,
        id: id
        })  


        }
        )

        
      }, 

    //RUTA DE PROFILE-EDIT  
    profileEdit:  function(req,res){

    let id = req.params.id
    let mensaje = 'Este no es tu usuario'

   // if (req.session.user.id == id) {

    usuario.findByPk(id)
    .then(
    (result)=>{
     // let fechaFormateada = new Date(result.fechaDeNacimiento).toISOString().slice(0,10);
      let usuarioEdit = {
        usuario : result.usuario,
        contrasenia: result.contrasenia,
        email: result.email,
        //fechaDeNacimiento: fechaFormateada,
        dni: result.dni,
        fotoDePerfil: result.fotoDePerfil,
        id: id,

      } 

      return res.render('profile-edit', {usuarioEdit:usuarioEdit})

    })
    //}else{

   //   return res.redirect('/user/profile/'+ id)
  //  }

    },  
    profileUpdate:(req,res)=> {
      let usuarioUpdate = req.body
      let idUpdate = req.params.id
      let imagenUpdateada = req.file.filename

      usuario.update(
        {
        usuario : usuarioUpdate.usuario,
        contrasenia: usuarioUpdate.contrasenia,
        email: usuarioUpdate.email,
      //  fechaDeNacimiento: usuarioUpdate.fechaDeNacimiento,
        dni: usuarioUpdate.dni,
        fotoDePerfil: imagenUpdateada,
        id: usuarioUpdate.id
        },
        {
          where:[
              { id: idUpdate }
          ]
      }
      )
      .then((result) => {
        
    })
      

    }, 

  }

module.exports = userController;
