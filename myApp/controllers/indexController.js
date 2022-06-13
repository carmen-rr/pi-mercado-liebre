const db = require("../db/data");
const data = require("../database/models");
const op = data.Sequelize.Op; 
//const bcryptjs = require ('bcryptjs')


const productos = data.Producto; 
const comentarios = data.Comentario; 
const usuario = data.Usuario; 

const indexController = { 

    //INDEX 
    index: (req, res) => {
      productos.findAll({

        order: [[ "createdAt" , "DESC"]]
      })
      .then((result) => {
        return res.render('index', {productos : result})
      })
      }, 

    //RUTA DE SEARCH 
    search:  function(req,res) {
      let palabraBuscada = req.query.search;
      let filtro = {
              where : {
              [op.or]: [
                { nombre: { [op.like]: `%${palabraBuscada}%`} },
                { descripcion: { [op.like]: `%${palabraBuscada}%`} }
              ]
            }
       };
      productos.findAll(filtro)
      .then((result) => {
       // return res.render('search-results')
      // return res.send(result)
      console.log(result);
      return res.render('search-results', {
        busqueda : result,
        palabraBuscada : palabraBuscada
        
      })
       })
      .catch(function(error) {
        console.log(error);
      })

      },
    
    

    

    //RUTA DE LOGIN 
    loginCreate:  function (req,res){
        return res.render('login')
      }, 

     loginStore:  function (req,res){
        return res.render('login')
      }, 

    //RUTA DE REGISTER 
    registerCreate:  function (req,res){
        return res.render('register')
      }, 

    registerStore:  function (req,res){
      let info = req.body; //guardando los datos del forms
      let usuarioCreado = { //creando el usuario 

        usuario : info.usuario, 
        contrasenia: info.contrasenia, //HASHING aca vamos a usar bcrypt con la pass encriptada
        email: info.email, 
        fechaDeNacimiento: info.fechaDeNacimiento, 
        dni: info.dni, 
        fotoDePerfil: info.fotoDePerfil,

      }
      usuario.create(
        usuarioCreado
      )
      .then((result) =>{
        return res.redirect("/user/profile")
      })
      }, 

}; 


module.exports = indexController; 