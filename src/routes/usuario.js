const express = require('express');
const router = express.Router();
const controller = require('../controllers/Usuario')

router.get('/', (req, res, next) => {
    let dados = controller.getUsers();
    res.status(200).send(dados);
});

module.exports = router;