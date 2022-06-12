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

      /*
      //PROMESA DE NOBRE DE PRODUCTO 
      let nombrePromesa =  productos.findAll({
        where:[ 
           {nombre : {[op.like] : "%"+ palabraBuscada +"%"} },    //nombre

                    ]
      })
      //PROMESA DE DESCRIPCION DE PRODUCTO 
      let descripcionPromesa =  productos.findAll({
        where:[ 
           {descripcion : {[op.like] : "%"+ palabraBuscada +"%"} },    //nombre

                    ]
      })

      Promise.all([nombrePromesa, descripcionPromesa])
      //callback que recibe un array con los resultados de las promesas 
      .then(function ([resultadoNombre, resultadoDescripcion]){
        console.log(resultadoNombre, resultadoDescripcion)
      }) */


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