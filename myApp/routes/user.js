var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');

router.get('/profile', function(req,res){
  return res.render('profile')
}) 

router.get('/profile/edit', function(req,res){
  return res.render('profile-edit')
})


/* GET users listing. */
router.get('/', function(req, res, next) {
  return res.render('respond with a resource');
});

module.exports = router;
