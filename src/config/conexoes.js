let connectionType = {
    ['mysql']: {
        'host': 'localhost', 
        'port': 3306, 
        'user': 'gestao_financeira', 
        'password': 'gestao123', 
        'database': 'controle_financeiro'
    },
    ['postgresql']: {
        'host': '', 
        'port': 0, 
        'user': '', 
        'password': '', 
        'database': ''
    }, 
    ['mongodb']: {
        'host': '', 
        'port': 0, 
        'user': '', 
        'password': '', 
        'database': ''
    }, 
    ['sqlserver']: {
        'host': '', 
        'port': 0, 
        'user': '', 
        'password': '', 
        'database': ''
    }, 
    ['oracle']: {
        'host': '', 
        'port': 0, 
        'user': '', 
        'password': '', 
        'database': ''
    }, 
    ['db2']: {
        'host': '', 
        'port': 0, 
        'user': '', 
        'password': '', 
        'database': ''
    }
}

module.exports = connectionType;