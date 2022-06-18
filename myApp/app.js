var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
/*REQUERIMOS EXPRESS-SESSION*/
const session = require('express-session');

/*REQUIRIENDO LOS MODELOS EN EL ENTRY POINT */
const data = require("./database/models");


var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var productRouter = require('./routes/product');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

//express permite transformar la info en un tipo de dato que podamos manipular
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*UTILIZAMOS EL MIDDLEWARE DE SESSION (funcion en medio de una solicitud y respuesta) DESPUES DE APP*/
app.use(session({
  secret: 'myApp', 
  resave: false, 
  saveUninitialized: true

}));

/*CREAMOS EL MIDDLEWARE DE SESSION GUARDADO EN LOCALS*/
app.use(function(req, res, next) {
if (req.session.user != undefined) { 
res.locals.user = req.session.user; 
}
return next();
});

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/product', productRouter);


  /*CREANDO EL MIDDLEWARE DE COOKIES 
  
  app.use(function(req, res, next) {
  if (req.cookies.idUser != undefined && req.session.user == undefined){
    let idUserEnCookie = req.cookies.idUser

    db.Usuario.findByPk(idUserEnCookie)
    .then((user) => {
      req.session.user = user.dataValues; 
      res.locals.user = user.dataValues; 
      
      return next();

    }) .catch ((error) => {
      console.log(error); 
    })

  }else{
    return next();
}
})
*/
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
