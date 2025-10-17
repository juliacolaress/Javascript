const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');


/* GET users listing. */
router.get('/',siteController.produtos);
router.get("/camisetas",siteController.camisetas);


module.exports = router;