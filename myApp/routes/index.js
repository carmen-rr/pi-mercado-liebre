var express = require('express');
var router = express.Router();

const indexController = require('../controllers/indexController')  
 

router.get ('/search', indexController.search); 

//RUTAS DE LOGIN 
router.get('/login', indexController.loginCreate);  //me muestra el formulario para que pueda cargar la info 

    //router.post ('/login', indexController.loginStore) //capturar la informacion del formulario 

//RUTAS DE RESGISTER
router.get('/register', indexController.registerCreate);  //me muestra el formulario para que pueda cargar la info 

    router.post('/register', indexController.registerStore);  //capturar la informacion del formulario 


/* GET home page. */
router.get('/', indexController.index);

module.exports = router;

