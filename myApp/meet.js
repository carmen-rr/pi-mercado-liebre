
/*loginStore:  function (req,res){
       let info = req.body;
       usuario.findOne({
        where : [{ email : info.email }]
       })
        .then((result) => { //el result es la informacion del usuario de la db (ol con propiedades)
          if (result != null) {
            let claveCorrecta =  bcryptjs.compareSync (info.contrasenia, result.contrasenia)
            if (claveCorrecta){

              /*P SESSION  */
             //req.session.user = result.dataValues;
             // console.log(req.session.user); 
             //return res.redirect("/user/profile")

              /*EVALUANDO CHECKBOX */
            //  if (req.body.remember != undefined) {
            //    res.cookie('idUser', req.session.user.id, { maxAge: 1000 * 60 * 5 });
            //  }
/*
            return res.send ("Existe el mail " + result.email + " y la clave tambien es correcta") // acá iria un res.redirect
          } else {
            return res.send ("Existe el mail " + result.email + " pero la clave es incorrecta")
          }
        }
     });
     // return res.render('login')
    }, 

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



//// HUSHING DE REGISTER ////
/*

registerStore:  function (req,res){
      let info = req.body; //guardando los datos del forms
      let passEncriptada = bcrypt.hashSync('info.contrasenia', 10);
      
      let usuarioCreado = { //creando el usuario 

        usuario : info.usuario, 
        contrasenia: passEncriptada, //HASHING aca vamos a usar bcrypt con la pass encriptada
        email: info.email, 
        fechaDeNacimiento: info.fechaDeNacimiento, 
        dni: info.dni, 
        fotoDePerfil: req.file.filename,

      }
      usuario.create(
        usuarioCreado
      )
      .then((result) =>{
        return res.redirect("/user/profile")
      }).catch(err =>{console.log(err)})
      }, 

};

//PROCESANDO LOGIN//
 
  loginStore:  function (req,res){
    
    let info = req.body;

     usuario.findOne({
      where : [{ email : info.email }]
     }).then(result) => {
      if (condition) {
        
      }
     };
    
    return res.render('login')
      }, 

*/