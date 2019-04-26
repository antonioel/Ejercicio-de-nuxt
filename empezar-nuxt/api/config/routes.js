const express = require('express');
const router = express.Router();
const Ctr_practica = require('../controllers/Ctr_pract');

router.get('/algo', Ctr_practica.practica);

module.exports = router;