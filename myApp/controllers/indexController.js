const db = require("../db/data");
const indexController = { 

    //RUTA DE INDEX 
    index: function(req, res) {
    let detalleProducto = db.producto
      return res.render('index', { 
      dataProducto: detalleProducto  
      // title: 'Express'
       }); //se envian los productos de carpeta db 
      }, 

    //RUTA DE SEARCH 
    search:  function(req,res) {
      let palabraBuscada = req.query.search;
      let nombreProducto = db.producto;
        return res.render('search-results', {
          palabra : palabraBuscada,
          dataProducto: nombreProducto,
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