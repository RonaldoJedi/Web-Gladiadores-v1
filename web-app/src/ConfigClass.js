export default class ConfigClass{
    constructor(){

    }
   
    static getUrlApi(){
        this.urlApi = "http://localhost:2000";
        return this.urlApi;
    }
}