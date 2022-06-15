var express = require('express');
var router = express.Router();

//requeriendo módulos de multer y path
const multer = require('multer');
const path = require('path');

const indexController = require('../controllers/indexController')


//configurando multer

let storage = multer.diskStorage({
    destination : function (req , file , cb) {
      cb( null, path.join (__dirname , '../public/images/users' ) )  
    },
    filename : function (req, file, cb) {
      cb( null , file.fieldname + '-' + Date.now () + path.extname(file.originalname) )
    },

});

let upload = multer({storage: storage})  
 

router.get ('/search', indexController.search); 

//RUTAS DE LOGIN 
router.get('/login', indexController.loginCreate);  //me muestra el formulario para que pueda cargar la info 

    //router.post ('/login', indexController.loginStore) //capturar la informacion del formulario 

//RUTAS DE RESGISTER
router.get('/register', indexController.registerCreate);  //me muestra el formulario para que pueda cargar la info 
router.post('/register',upload.single('fotoDePerfil'), indexController.registerStore);  //capturar la informacion del formulario





/* GET home page. */
router.get('/', indexController.index);

module.exports = router;

