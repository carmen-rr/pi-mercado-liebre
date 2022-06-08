const db = require("../db/data");
const data = require("../database/models");

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

      //comentario
    //RUTA DE SEARCH 
    search:  function(req,res) {
      let palabraBuscada = req.query.search;
      return res.render('search-results', {

        palabra : palabraBuscada,
        dataProducto: db.producto,

          })
      } ,

    //RUTA DE LOGIN 
    login:  function (req,res){
        return res.render('login')
      }, 

    //RUTA DE REGISTER 
    register:  function (req,res){
        return res.render('register')
      }, 

}; 

/*let indexController ={
  index: function(req, res){
      data.Producto.findAll()
      .then(function(productos){
          res.render("index",{producto: productos})
      });
  },
}*/

module.exports = indexController; 