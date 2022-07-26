const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/cadastrar', homeController.showRegister);
router.post('/cadastrar', homeController.registerProcess);

router.get('/login', homeController.showLogin);
router.post('/login', homeController.loginProcess);

module.exports = router;