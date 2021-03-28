const express = require('express');
const app = express();
const router = express.Router();

//Rotas
const index = require('./routes/index');
const usuario = require('./routes/usuario');

app.use('/', index);

app.use('/usuarios', usuario);



module.exports = app;