//Usuario.js
module.exports = class Usuario {
    //propriedades e funções da classe aqui
    constructor() {
        this.id = null;
        this.login = null;
        this.senha = null;
        this.nome = null;
        this.cpf = null;
        this.email = null;
        this.token = null;
        this.ativo = 1;
        this.data_cadastro = null;
        this.data_ultimo_login = null;
    }

    cadastrarUsuario = () => {
        
    }

    atualizarUsuario = (dados) => {
        
    }

    excluirUsuario = (id) => {
        
    }

    listarUsuarios = () => {
        const mysql = require('mysql2');
        const con = mysql.createConnection({
            host: 'localhost',
            user: 'gestao_financeira',
            password: 'gestao123',
            database: 'controle_financeiro'
        });
        let dados = [];
        con.query('SELECT * FROM usuarios', (err,rows) => {
            if(err) throw err; 
            console.log('Data received from Db:');
            console.log(JSON.stringify(rows));
            dados.push(rows);
        });
        return dados;
    }

    getUsuario = (id) => {
        
    }

    ativarDesativar = (id, status) => {

    }

}