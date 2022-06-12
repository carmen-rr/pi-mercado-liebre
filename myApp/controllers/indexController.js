const db = require("../db/data");
const data = require("../database/models");
const op = data.Sequelize.Op; 


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
      productos.findOne({
        where:[ 
           // {nombre: {[op.like] : "%"+ palabraBuscada +"%"} },    //nombre
            {descripcion:{[op.like] :  "%"+ palabraBuscada +"%"}  }    //descripcion

                    ]
      })
      .then((result) => {
        return res.send(result)
      })
     
      } , 

     /* search:  function(req,res) {
        let palabraBuscada = req.query.search;
        productos.findOne({
          where:[
            //{nombre : palabraBuscada}
            {nombre: {[op.like] : "%"+ palabraBuscada +"%"} },    //nombre
            //{descripcion:{[op.like] :  "%"+ palabraBuscada +"%"}  }    //descripcion
                      ]
        })
        .then((result) => {
          return res.render('search-results', {
            palabra : palabraBuscada,
            productos: result,

          })
        })
       
        } ,  */

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