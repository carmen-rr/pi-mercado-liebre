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
        order: [[ "createdAt" , "DESC"]],
        include:[
          {association: 'usuarioProducto'}
        ]
      })
      .then((result) => {
        console.log(result)
        //return res.send(result)
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
        
        //Hago que no se pueda entrar a profile estando logueado
        if (req.session.user != undefined) {
          return res.render('index')
      } else {
          return res.render('login')
      }

      },
      loginStore:  function (req,res){
       
       let info = req.body;
       usuario.findOne({
        where : [{ email : info.email }]
       })
        .then((result) => { //el result es la informacion del usuario de la db (ol con propiedades)
          if (result != null) {
            let claveCorrecta =  bcryptjs.compareSync (info.contrasenia, result.contrasenia)
            if (claveCorrecta){

              req.session.user = result.dataValues; //traemos la info y guardandola en session
              //console.log(req.session.user);  //ver la info que almaceno 
              //return res.send ("Existe el mail " + result.email + " y la clave es correcta")


                /*EVALUANDO CHECKBOX, si checkbox esta en true */
              if (req.body.remember != undefined) {
                res.cookie('idUser', req.session.user.id, { maxAge: 1000 * 60 * 5 }); //quiero almacenar el id del usuario
                }
              let id = req.session.user.id
              return res.redirect("/")

            } else {
              return res.send ("Existe el mail " + result.email + " pero la clave es incorrecta")
            }

          } else {
            return res.send("No existe este mail " +  info.email);
          }
        })
        .catch(function(error){
          console.log(error);
        
        })        
      },


    //RUTA DE REGISTER
      registerCreate:  function (req,res){
        return res.render('register')
      },
      
      registerStore:  function (req,res){
      
      let info = req.body; //guardando los datos del forms
      let passEncriptada = bcryptjs.hashSync(info.contrasenia, 10);

      //Validacion de formularios de Register. Min 39 clase Brian
      let errors ={}; 
      if(req.body.usuario == ''){   //si el ususario esta vacio, entonces devolve este mensaje
        errors.message = 'Username no puede estar vacio';
        res.locals.errors = errors;
        return res.render('register'); 
      }else if(req.body.contrasenia == ''){ //si el password esta vacio devolve este mensaje
        errors.message = 'Password no puede estar vacio';  
        res.locals.errors = errors;
        return res.render('register')
     // }else if (req.body.contrasena.length <3) { //contraseña no puede tener menos de 3 caracteres
     //   errors.message = 'La contraseña no puede tener menos de 3 caracteres';  
     //   res.locals.errors = errors;
        return res.render('register')
      }else if(req.body.email == ''){     //si el mail esta vacio devolve este mensaje
        errors.message = 'eamil no puede estar vacio';
        res.locals.errors = errors;
        return res.render('register')
      }else if(req.body.fechaDeNacimiento == ''){   //si la fecha esta vacia devolve este mensaje
        errors.message = 'Fecha de Nacimiento no puede estar vacio';
        res.locals.errors = errors;
        return res.render('register')
      }else if(req.body.dni == ''){ //si el deni esta vacio devolve este mensaje
        errors.message = 'dni estar vacio';
        res.locals.errors = errors;
        return res.render('register')
      }else{                          
        
          //Si todo lo se arriba esta bien, entonces ejecuta esto. Minuto 33 clase Validacion Brian

          //Hay que hacer que se agrgue una imagen sola
          
          //Creando el usuario

          let usuarioCreado = {
            usuario : info.usuario,
            contrasenia: passEncriptada,
            email: info.email,
            fechaDeNacimiento: info.fechaDeNacimiento,
            dni: info.dni,
            fotoDePerfil: req.file.filename,
            seguidores: 0, //porque esta comenzando y no hay seguidores
            comentarios: 0, 
          }
        
          usuario.create(usuarioCreado)
          .then( usuario =>{
            return res.redirect("/login")
            //Después de guardar un dato create retorna el dato desde la base y lo pone como parámetro dentro del callback. 
          })
          .catch(err =>{console.log(err)})
        }
      },
      logOut:  function (req,res){
        req.session.destroy();
        res.clearCookie('idUser');
        return res.render('login')
      },

};
module.exports = indexController;







