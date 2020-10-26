var express = require('express');
var router = express.Router();
var modelTeste = require('../banco/model/teste/TesteModel');
var RespostaClass = require('../banco/model/RespostaClass');

router.get("/", function(req, res, next){

    modelTeste.getTodos(function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = "Ocorreu um erro";
            console.log("erro:", erro);

        }else{
            resposta.dados = retorno;
        }

        res.json(resposta);
        
    })
})

router.get("/:id?", function (req, res, next) {

    modelTeste.getId(req.params.id, function(erro,retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = "ocorreu um erro";
            console.log("Erro: ", erro);
        } else{
            resposta.dados = retorno;
        }

        res.json(resposta);

    })
})

//post
router.post("/?", function (req, res, next) {
//req.body são os campos do formulario
    modelTeste.adicionar(req.body, function (erro, retorno) {
        let resposta = new RespostaClass();

        if (erro) {
            resposta.erro = true;
            resposta.msg = "ocorreu um erro";
            console.log("Erro: ", erro);
        } else {
            if(retorno.affectedRows > 0){
                resposta.msg = "personagem cadastrado com sucesso!"
         
            }else{
                resposta.erro = true;
                resposta.msg = "ocorreu um erro!"
                console.log("erro: ", erro);
            }
        }
        console.log('resposta:', resposta);
        res.json(resposta);

    })
})
//delete
router.delete("/:id?", function (req, res, next) {
    modelTeste.deletar(req.params.id, function (erro, retorno) {
        let resposta = new RespostaClass();

        if (erro) {
            resposta.erro = true;
            resposta.msg = "ocorreu um erro";
            console.log("Erro: ", erro);
        } else {
            if (retorno.affectedRows > 0) {
                resposta.msg = "personagem deletado com sucesso!"
            } else {
                resposta.erro = true;
                resposta.msg = "ocorreu um erro!"
                console.log("erro: ", erro);
            }
        }
        console.log('resposta:', resposta);
        res.json(resposta);

    })
})

//put precisa dos campos do formulario, ou seja req.body
router.put("/", function (req, res, next) {
    //req.params.id recupera o id da requisição
    //no body tem todos os campos de formulario, pra deletar
    modelTeste.editar(req.body, function (erro, retorno) {
        let resposta = new RespostaClass();//padrao pra requisição da api

        if (erro) {
            resposta.erro = true;
            resposta.msg = "Ocorreu um erro";
            console.log("erro: ", erro);
        } else {
            if (retorno.affectedRows > 0) {//se conseguiu afetar uma linha ja funcionou
                resposta.msg = "Registro editado com sucesso!"
            } else { 
                resposta.erro = true;
                resposta.msg = 'Não foi possivel editar o registro..'
            }
        }
        console.log('Resposta: ', resposta);
        //console.log('Erro: ', erro);
        res.json(resposta);
    });
});



module.exports = router;