var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');
router.get('/', userController.show) // tenemos que ver que modo usamos 

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
