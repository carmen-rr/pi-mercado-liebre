const db = require("../db/data");
const data = require("../database/models");

const producto = data.Producto 

const indexController = { 

    //RUTA DE INDEX 
    index: function(req, res) {
      return res.render('index', { 

        dataProducto: db.producto,  

       }); 
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

module.exports = indexController; 