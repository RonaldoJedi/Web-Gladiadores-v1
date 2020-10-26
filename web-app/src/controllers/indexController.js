import testeModel from '../model/TesteModel';
import batalhaGlad from '../js/batalha';
let div = window.document.getElementById("mural-div");
let select1 = window.document.getElementById("glad1");
let select2 = window.document.getElementById("glad2");
let objIndexController;
let botaoBatalha = document.getElementById("btn-batalha");
let btnLimparConsole = document.getElementById("btn-limpar-console");
let divLog = document.getElementById("batalha-log");
export default class IndexController{
    constructor(){

    }
    getTodosGladiadores(mural){
        let promise = new Promise(function(resolve,reject){
            let promiseFetch = testeModel.getGladiadores();

            promiseFetch.then(response => {
                resolve(response);
            })
        })

        promise.then(response => {
            let dados = "";

            for(const gladiador of response.dados){
                dados += `<div class="card">
  <div class="card-header">
    Gladiador ${gladiador.nome} id:(${gladiador.idTeste}) 
  </div>
  <div class="card-body">
    <h5 class="card-title">Atributos</h5>
    <p class="card-text">Ataque: ${gladiador.ataque}, Defesa: ${gladiador.defesa}, Vida: ${gladiador.vida}, Velocidade: ${gladiador.velocidade}</p>
  </div>
</div>`
            }
            mural.innerHTML = dados;
        }).catch(response => {
            console.log('erro catch:', response);
        })
    }
    inserirTodosGladiadores(select1,select2) {
        let promise = new Promise(function (resolve, reject) {
            let promiseFetch = testeModel.getGladiadores();

            promiseFetch.then(response => {
                resolve(response);
            })
        })

        promise.then(response => {
        
            for(const gladiador of response.dados){
                var testeOption = new Option(gladiador.nome.toString(), gladiador.idTeste.toString());
                var testeOption2 = new Option(gladiador.nome.toString(), gladiador.idTeste.toString());
           //         console.log(`Gladiador id:${gladiador.idTeste}`);
            //        console.log("nome: ", gladiador.nome);
             //       console.log("option: ", testeOption);
                    select1.add(testeOption, undefined);
                    select2.add(testeOption2, undefined);
                
            }
        }).catch(response => {
            console.log('erro catch:', response);
        })
    }

    iniciarBatalhaGladiadores(select1, select2) {
        let promise = new Promise(function (resolve, reject) {
            let promiseFetch = testeModel.getGladiadores();

            promiseFetch.then(response => {
                resolve(response);
            })
        })
//aqui que o codigo vai
        promise.then(response => {
            let id1 = select1.value;
            let id2 = select2.value;
            console.log('id1: ', id1);
            console.log('id2: ', id2);
            console.log(select1.options[id1 - 1].text + " & " + select2.options[id2 - 1].text + " foram selecionados! QUE COMECE A BATALHA!");
            let objGlad1 = response.dados[id1-1];
            let objGlad2 = response.dados[id2-1];

            console.log("objglad1: ", objGlad1);
            console.log("objglad2: ", objGlad2);
           batalhaGlad(objGlad1, objGlad2);
        }).catch(response => {
            console.log('erro catch:', response);
        })
    }
}


function limparconsole() {
    console.clear();
    divLog.innerText = "";
}


function main(){
    objIndexController = new IndexController();
    objIndexController.getTodosGladiadores(div);
    objIndexController.inserirTodosGladiadores(select1, select2);
    botaoBatalha.addEventListener("click", function(){
        objIndexController.iniciarBatalhaGladiadores(select1, select2);
    });
    btnLimparConsole.addEventListener("click", function(){
        limparconsole()
     //   console.log("console limpo");
    });
}

window.onload = main;
