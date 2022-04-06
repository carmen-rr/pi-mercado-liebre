var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController'); //VINCULANDO ROUTES DE USER CON CONTROLLER USERCONTROLLER


router.get('/profile', userController.profile); 

router.get('/profile/edit', userController.profileEdit); 


/* GET users listing. */
router.get('/', function(req, res, next) {
  return res.render('respond with a resource');
});

module.exports = router;
