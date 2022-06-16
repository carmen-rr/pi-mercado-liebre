const db = require("../db/data");
const data = require("../database/models");
const op = data.Sequelize.Op;
/*Requeriendo el modulo de bcryptjs*/
const bcryptjs = require("bcryptjs");
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
      console.log(req.query.search)
      console.log(typeof palabraBuscada);
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
       let info = req.body;
       usuario.findOne({
        where : [{ email : info.email }]
       })
        .then((result) => {
          if (result != null) {
            let claveCorrecta =  bcryptjs.compareSync (info.contrasenia, result.contrasenia)
            console.log(info.contrasenia)
            if (claveCorrecta){
              return res.send ("Existe el mail " + result.email + " y la clave tambien es correcta")
            } else {
              return res.send ("Existe el mail " + result.email + " pero la clave es incorrecta")
            }
          }
       });
       // return res.render('login')
      },
    //RUTA DE REGISTER
      registerCreate:  function (req,res){
        return res.render('register')
       },
    registerStore:  function (req,res){
      let info = req.body; //guardando los datos del forms
      let passEncriptada = bcryptjs.hashSync(info.contrasenia, 10);
      let usuarioCreado = { //creando el usuario
        usuario : info.usuario,
        contrasenia: passEncriptada,
        email: info.email,
        fechaDeNacimiento: info.fechaDeNacimiento,
        dni: info.dni,
        fotoDePerfil: req.file.filename,
        //remeber_token:
      }
      usuario.create(
        usuarioCreado
      )
      .then((result) =>{
        return res.redirect("/user/profile")
      }).catch(err =>{console.log(err)})
      },
};
module.exports = indexController;







