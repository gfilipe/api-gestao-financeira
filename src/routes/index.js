const express = require('express');
const router = express.Router();
router.get('/', function (req, res, next) {
    res.status(200).send({
        descAPI: "API Sistema de Gestão Financeira",
        version: "1.0.0"
    });
});
module.exports = router;