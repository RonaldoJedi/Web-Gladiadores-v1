const db = require('../../dbConexao');

module.exports = class TesteModel {
    static getTodos(callback) {
        return db.query("SELECT * FROM teste", callback);
    }

    static getId(id, callback) {
        return db.query("SELECT * FROM teste WHERE idTeste = ?", [id], callback);
    }

    static adicionar(personagem, callback) {
        return db.query("INSERT INTO teste (nome,ataque,defesa,vida,velocidade) VALUES (?, ?, ?, ?, ?)", [personagem.nome, personagem.ataque, personagem.defesa, personagem.vida, personagem.velocidade], callback);
    }

    static deletar(id, callback) {
        return db.query("DELETE FROM teste WHERE idTeste = ?", [id], callback);
    }

    static editar(personagem, callback){
        return db.query("UPDATE teste SET nome = ?, ataque = ?, defesa = ?, vida = ?, velocidade = ? WHERE idTeste = ?", [personagem.nome, personagem.ataque, personagem.defesa, personagem.vida, personagem.velocidade,personagem.idTeste], callback);
    } 
}