/*

const db = require("../db/data");
//const data = require("../database/models"); //conectando la data base con los modelos 

//const producto = data.Producto 

const indexController = { 

    //RUTA DE INDEX 
    index: function(req, res) {

      //Buscando todo el modelo de productos
      //producto.findAll({
        //condiciones
      })
      .then((resultados)=>{
      return res.render('index', { 
        dataProducto: db.producto,  

       }); 
      //})}, 

      /*show: 
      let id = req.params.id;
      producto.findByPK(id)
        .then((resultados)=>{
        return res.render("producto", {
            producto : resultados
        })
        })}, 

    //RUTA DE SEARCH 
    search:  function(req,res) {
      let palabraBuscada = req.query.search;

        //VAMOS A BUSCAR MODELO DE PRODUCTO, que busque por nombre de producto 
         /* producto.findOne({
             where: [
                 {title : palabraBuscada{
                 {title : [op.like] : "%+palabraBuscada+%""}
             ]
         })
        .then((resultados)=>{
           return res.send(resultados); 
        })

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

module.exports = indexController; */