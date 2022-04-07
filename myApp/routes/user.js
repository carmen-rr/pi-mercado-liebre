var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');


router.get('/profile', userController.profile); 

router.get('/profile/edit', userController.profileEdit); 


module.exports = router;
