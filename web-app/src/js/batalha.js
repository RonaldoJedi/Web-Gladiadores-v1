var venceu = false;
var vencedor = "";
var maisRapido;
var mensagemResultado = document.getElementById("resultado");
let divLog = document.getElementById("batalha-log");
let dados = "";
var num = 1;
var vencedor,perdedor,vidaPerdedor;
export default function batalhaGlad(glad1,glad2){
    console.log("funcao batalhaGlad roda");
     console.log('glad1:', glad1);
    console.log('glad2:', glad2); 
    num = 1;
    venceu = false;
    divLog.innerText = "";
    dados = "";
    iniciativa(glad1, glad2);
    console.log("funçao iniciativa passou");

    for(var i = 1; i <= 10; i++){
    if(venceu == true){
        mensagemResultado.innerText = `O vencedor foi ${vencedor}`;
        break;
    }
    if(i == 10){
        mensagemResultado.innerText = "O limite de turnos foi excedido.";
        break;
    }
        trocaçãoGolpes(glad1, glad2, num);
}

if (i==10){
    dados += ` HOUVE UM EMPATE! `;
}else{
    dados += ` O VENCEDOR FOI ${vencedor}!\n`;
}
divLog.innerText = dados;
  
}


function iniciativa(glad1,glad2){
    //resetarTudo();
   // console.log("funcao iniciativa rodando");
   // console.log(glad1.velocidade + " & " + glad2.velocidade);
    if(glad1.velocidade > glad2.velocidade){
        console.log(`${glad1.nome} começa!`);
        maisRapido = 1;
    }else if(glad2.velocidade > glad1.velocidade){
        console.log(`${glad2.nome} começa!`);
        maisRapido = 2;
    }else{
        var resultado = Math.floor((Math.random()*2));
        console.log("empate de velocidade, gerando numero aleatorio", resultado);
        if(resultado == 0){
            maisRapido = 1;
        }else if(resultado == 1){
            maisRapido = 2;
        }
    }
    console.log(glad1, glad2);
}

function trocaçãoGolpes(glad1,glad2,contador){
 /*   console.log("gladiador1: ", glad1);
    console.log("gladiador2: ", glad2);*/
    if(maisRapido == 1){
        dados += `------Turno ${contador}-------\n`;
        console.log(`------Turno ${contador}-------`);
        num++;
        ataque(glad1, glad2);  
        ataque(glad2, glad1);
    }else if(maisRapido == 2){
        dados += `------Turno ${contador}-------\n`;
        console.log(`------Turno ${contador}-------`);
        num++;
        ataque(glad2, glad1);  
        ataque(glad1,glad2);
    }

       
    if(glad1.vida <= 0){
        venceu = true;
        vencedor = glad2.nome.toString();
        perdedor = glad1.nome.toString();
        vidaPerdedor = glad1.vida;
        console.log("vencedor: ", glad2);
        console.log("perdedor: ", glad1);
    }else if(glad2.vida <= 0){
        venceu = true;
        vencedor = glad1.nome.toString();
        perdedor = glad2.nome.toString();
        vidaPerdedor = glad2.vida;
        console.log("vencedor: ", glad1);
        console.log("perdedor: ", glad2);
    }
    if(venceu){
        dados += ` O gladiador ${vencedor} finalizou ${perdedor} com um poderoso golpe que o deixou com ${vidaPerdedor} pontos de vida.\n`;
        console.log(`O gladiador ${vencedor} finalizou ${perdedor} com um poderoso golpe que o deixou com ${vidaPerdedor} pontos de vida.`);
    }
}
function ataque(atacante,defensor){

    if(atacante.vida <= 0){
        console.log(`O gladiador ${atacante.nome} não pode atacar pois está insconsciente`);
    }else{
    var dano = atacante.ataque - defensor.defesa
    if(dano <= 0) dano = 1;
    defensor.vida -= dano;
    dados += `\n ataque de ${atacante.nome} causa ${dano} pontos de dano em ${defensor.nome}! o mesmo fica com ${defensor.vida} pontos de hp!\n`;
    console.log(`ataque de ${atacante.nome} causa ${dano} pontos de dano em ${defensor.nome}! o mesmo fica com ${defensor.vida} pontos de hp!`);
    if(defensor.vida <= 0){
        venceu = true;
    }
}
}

