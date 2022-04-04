const express = require('express');
const router = express.Router();

const profileController = require('../controllers/profileController');
router.get('/', profileController.show) // tenemos que ver que modo usamos 