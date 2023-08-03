const express = require('express');

const router = express.Router();

//const motoboy = require('../controllers/motoboy-controller');

router.get('/', (req, res) => {return res.json("API Respondendo")});
//router.post('/motoboy', motoboy.create);
//router.get('/motoboy', motoboy.read);
//router.put('/motoboy', motoboy.update);
//router.delete('/motoboy', motoboy.del);

module.exports = router;