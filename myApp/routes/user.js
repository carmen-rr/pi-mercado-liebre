var express = require('express');
var router = express.Router();

//requeriendo módulos de multer y path
const multer = require('multer');
const path = require('path');

//configurando multer

let storage = multer.diskStorage({
    destination : function (req , file , cb) {
      cb( null, path.join (__dirname , '../public/images/products' ) )  
    },
    filename : function (req, file, cb) {
      cb( null , file.fieldname + '-' + Date.now () + path.extname(file.originalname) )
    },

});

let upload = multer({storage: storage})


const userController = require('../controllers/userController');


router.get('/profile/:id', userController.profile); 

router.get('/profile/edit/:id', userController.profileEdit); 
router.post('/profile/edit/:id', upload.single('fotoDePerfil'), userController.profileUpdate); 



module.exports = router;
