let conexaoSelecionada = require('./conexoes');

async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
 
    const mysql = require("mysql2");
    const connection = mysql.createConnection(`mysql://${conexaoSelecionada['mysql'].user}:${conexaoSelecionada['mysql'].password}@${conexaoSelecionada['mysql'].host}:${conexaoSelecionada['mysql'].port}}/${conexaoSelecionada['mysql'].database}}`);
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

module.exports = {
    connect
};