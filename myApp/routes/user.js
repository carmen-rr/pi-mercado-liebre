var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');


router.get('/profile/id:', userController.profile); 

router.get('/profile/edit/:id', userController.profileEdit); 
router.post('/profile/edit:id', userController.profileUpdate); 



module.exports = router;
