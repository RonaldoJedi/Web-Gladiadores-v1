const mysql = require('mysql');

const conexao = mysql.createPool({
    host: 'localhost',
    user: 'Ronaldo',
    password: "",
    database: 'db_teste',

});

module.exports = conexao;