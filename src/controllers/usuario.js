const Usuario = require('../models/Usuario');
const user = new Usuario();

exports.post = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!');
};

exports.getUsers = () =>{
    return user.listarUsuarios();
}

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.get = (req, res, next) => {
    res.status(201).send(`lista de usuários`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};