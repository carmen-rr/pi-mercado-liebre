var express = require('express');
var router = express.Router();

router.get ('/search', function(req,res) {
  return res.render('search-results')
} )

router.get('/login', function (req,res){
  return res.render('login')
})

router.get('/register', function (req,res){
  return res.render('register')
})

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.render('index', { title: 'Express' });
});

module.exports = router;

