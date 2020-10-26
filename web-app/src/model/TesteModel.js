import ConfigClass from "../../src/ConfigClass";
//model para chamadas ajax

const caminho = `${ConfigClass.getUrlApi().toString()}/teste`

export default class TesteModel{
    constructor(){

    }

    static getGladiadores(){
        return fetch(caminho).then(response => {
            if(response.status >= 400){
                throw new Error('erro server');
            }

            return response.json();
        })
    }
}