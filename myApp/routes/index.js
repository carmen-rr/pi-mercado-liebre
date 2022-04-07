var express = require('express');
var router = express.Router();

const indexController = require('../controllers/indexController')  
 

router.get ('/search', indexController.index); 

router.get('/login', indexController.login); 

router.get('/register', indexController.register); 

/* GET home page. */
router.get('/', indexController.index);

module.exports = router;

