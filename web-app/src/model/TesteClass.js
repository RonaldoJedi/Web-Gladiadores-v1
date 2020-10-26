export default class TesteClass{
    constructor(id, nome, ataque, defesa, vida, velocidade){
        if(id!=null) this.idTeste = id;
        this.nome = nome;
        this.ataque = ataque;
        this.defesa = defesa;
        this.vida = vida; 
        this.velocidade = velocidade;
    }
}