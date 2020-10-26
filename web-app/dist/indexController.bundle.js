/*! For license information please see indexController.bundle.js.LICENSE.txt */
!function(e){var r={};function n(o){if(r[o])return r[o].exports;var a=r[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=r,n.d=function(e,r,o){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)n.d(o,a,function(r){return e[r]}.bind(null,a));return o},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="dist",n(n.s=1)}({"./src/ConfigClass.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConfigClass; });\nclass ConfigClass{\r\n    constructor(){\r\n\r\n    }\r\n   \r\n    static getUrlApi(){\r\n        this.urlApi = "http://localhost:2000";\r\n        return this.urlApi;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/ConfigClass.js?')},"./src/controllers/indexController.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexController; });\n/* harmony import */ var _model_TesteModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/TesteModel */ "./src/model/TesteModel.js");\n/* harmony import */ var _js_batalha__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/batalha */ "./src/js/batalha.js");\n\r\n\r\nlet div = window.document.getElementById("mural-div");\r\nlet select1 = window.document.getElementById("glad1");\r\nlet select2 = window.document.getElementById("glad2");\r\nlet objIndexController;\r\nlet botaoBatalha = document.getElementById("btn-batalha");\r\nlet btnLimparConsole = document.getElementById("btn-limpar-console");\r\nlet divLog = document.getElementById("batalha-log");\r\nclass IndexController{\r\n    constructor(){\r\n\r\n    }\r\n    getTodosGladiadores(mural){\r\n        let promise = new Promise(function(resolve,reject){\r\n            let promiseFetch = _model_TesteModel__WEBPACK_IMPORTED_MODULE_0__["default"].getGladiadores();\r\n\r\n            promiseFetch.then(response => {\r\n                resolve(response);\r\n            })\r\n        })\r\n\r\n        promise.then(response => {\r\n            let dados = "";\r\n\r\n            for(const gladiador of response.dados){\r\n                dados += `<div class="card">\r\n  <div class="card-header">\r\n    Gladiador ${gladiador.nome} id:(${gladiador.idTeste}) \r\n  </div>\r\n  <div class="card-body">\r\n    <h5 class="card-title">Atributos</h5>\r\n    <p class="card-text">Ataque: ${gladiador.ataque}, Defesa: ${gladiador.defesa}, Vida: ${gladiador.vida}, Velocidade: ${gladiador.velocidade}</p>\r\n  </div>\r\n</div>`\r\n            }\r\n            mural.innerHTML = dados;\r\n        }).catch(response => {\r\n            console.log(\'erro catch:\', response);\r\n        })\r\n    }\r\n    inserirTodosGladiadores(select1,select2) {\r\n        let promise = new Promise(function (resolve, reject) {\r\n            let promiseFetch = _model_TesteModel__WEBPACK_IMPORTED_MODULE_0__["default"].getGladiadores();\r\n\r\n            promiseFetch.then(response => {\r\n                resolve(response);\r\n            })\r\n        })\r\n\r\n        promise.then(response => {\r\n        \r\n            for(const gladiador of response.dados){\r\n                var testeOption = new Option(gladiador.nome.toString(), gladiador.idTeste.toString());\r\n                var testeOption2 = new Option(gladiador.nome.toString(), gladiador.idTeste.toString());\r\n           //         console.log(`Gladiador id:${gladiador.idTeste}`);\r\n            //        console.log("nome: ", gladiador.nome);\r\n             //       console.log("option: ", testeOption);\r\n                    select1.add(testeOption, undefined);\r\n                    select2.add(testeOption2, undefined);\r\n                \r\n            }\r\n        }).catch(response => {\r\n            console.log(\'erro catch:\', response);\r\n        })\r\n    }\r\n\r\n    iniciarBatalhaGladiadores(select1, select2) {\r\n        let promise = new Promise(function (resolve, reject) {\r\n            let promiseFetch = _model_TesteModel__WEBPACK_IMPORTED_MODULE_0__["default"].getGladiadores();\r\n\r\n            promiseFetch.then(response => {\r\n                resolve(response);\r\n            })\r\n        })\r\n//aqui que o codigo vai\r\n        promise.then(response => {\r\n            let id1 = select1.value;\r\n            let id2 = select2.value;\r\n            console.log(\'id1: \', id1);\r\n            console.log(\'id2: \', id2);\r\n            console.log(select1.options[id1 - 1].text + " & " + select2.options[id2 - 1].text + " foram selecionados! QUE COMECE A BATALHA!");\r\n            let objGlad1 = response.dados[id1-1];\r\n            let objGlad2 = response.dados[id2-1];\r\n\r\n            console.log("objglad1: ", objGlad1);\r\n            console.log("objglad2: ", objGlad2);\r\n           Object(_js_batalha__WEBPACK_IMPORTED_MODULE_1__["default"])(objGlad1, objGlad2);\r\n        }).catch(response => {\r\n            console.log(\'erro catch:\', response);\r\n        })\r\n    }\r\n}\r\n\r\n\r\nfunction limparconsole() {\r\n    console.clear();\r\n    divLog.innerText = "";\r\n}\r\n\r\n\r\nfunction main(){\r\n    objIndexController = new IndexController();\r\n    objIndexController.getTodosGladiadores(div);\r\n    objIndexController.inserirTodosGladiadores(select1, select2);\r\n    botaoBatalha.addEventListener("click", function(){\r\n        objIndexController.iniciarBatalhaGladiadores(select1, select2);\r\n    });\r\n    btnLimparConsole.addEventListener("click", function(){\r\n        limparconsole()\r\n     //   console.log("console limpo");\r\n    });\r\n}\r\n\r\nwindow.onload = main;\r\n\n\n//# sourceURL=webpack:///./src/controllers/indexController.js?')},"./src/js/batalha.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return batalhaGlad; });\nvar venceu = false;\r\nvar vencedor = "";\r\nvar maisRapido;\r\nvar mensagemResultado = document.getElementById("resultado");\r\nlet divLog = document.getElementById("batalha-log");\r\nlet dados = "";\r\nvar num = 1;\r\nvar vencedor,perdedor,vidaPerdedor;\r\nfunction batalhaGlad(glad1,glad2){\r\n    console.log("funcao batalhaGlad roda");\r\n     console.log(\'glad1:\', glad1);\r\n    console.log(\'glad2:\', glad2); \r\n    num = 1;\r\n    venceu = false;\r\n    divLog.innerText = "";\r\n    dados = "";\r\n    iniciativa(glad1, glad2);\r\n    console.log("funçao iniciativa passou");\r\n\r\n    for(var i = 1; i <= 10; i++){\r\n    if(venceu == true){\r\n        mensagemResultado.innerText = `O vencedor foi ${vencedor}`;\r\n        break;\r\n    }\r\n    if(i == 10){\r\n        mensagemResultado.innerText = "O limite de turnos foi excedido.";\r\n        break;\r\n    }\r\n        trocaçãoGolpes(glad1, glad2, num);\r\n}\r\n\r\nif (i==10){\r\n    dados += ` HOUVE UM EMPATE! `;\r\n}else{\r\n    dados += ` O VENCEDOR FOI ${vencedor}!\\n`;\r\n}\r\ndivLog.innerText = dados;\r\n  \r\n}\r\n\r\n\r\nfunction iniciativa(glad1,glad2){\r\n    //resetarTudo();\r\n   // console.log("funcao iniciativa rodando");\r\n   // console.log(glad1.velocidade + " & " + glad2.velocidade);\r\n    if(glad1.velocidade > glad2.velocidade){\r\n        console.log(`${glad1.nome} começa!`);\r\n        maisRapido = 1;\r\n    }else if(glad2.velocidade > glad1.velocidade){\r\n        console.log(`${glad2.nome} começa!`);\r\n        maisRapido = 2;\r\n    }else{\r\n        var resultado = Math.floor((Math.random()*2));\r\n        console.log("empate de velocidade, gerando numero aleatorio", resultado);\r\n        if(resultado == 0){\r\n            maisRapido = 1;\r\n        }else if(resultado == 1){\r\n            maisRapido = 2;\r\n        }\r\n    }\r\n    console.log(glad1, glad2);\r\n}\r\n\r\nfunction trocaçãoGolpes(glad1,glad2,contador){\r\n /*   console.log("gladiador1: ", glad1);\r\n    console.log("gladiador2: ", glad2);*/\r\n    if(maisRapido == 1){\r\n        dados += `------Turno ${contador}-------\\n`;\r\n        console.log(`------Turno ${contador}-------`);\r\n        num++;\r\n        ataque(glad1, glad2);  \r\n        ataque(glad2, glad1);\r\n    }else if(maisRapido == 2){\r\n        dados += `------Turno ${contador}-------\\n`;\r\n        console.log(`------Turno ${contador}-------`);\r\n        num++;\r\n        ataque(glad2, glad1);  \r\n        ataque(glad1,glad2);\r\n    }\r\n\r\n       \r\n    if(glad1.vida <= 0){\r\n        venceu = true;\r\n        vencedor = glad2.nome.toString();\r\n        perdedor = glad1.nome.toString();\r\n        vidaPerdedor = glad1.vida;\r\n        console.log("vencedor: ", glad2);\r\n        console.log("perdedor: ", glad1);\r\n    }else if(glad2.vida <= 0){\r\n        venceu = true;\r\n        vencedor = glad1.nome.toString();\r\n        perdedor = glad2.nome.toString();\r\n        vidaPerdedor = glad2.vida;\r\n        console.log("vencedor: ", glad1);\r\n        console.log("perdedor: ", glad2);\r\n    }\r\n    if(venceu){\r\n        dados += ` O gladiador ${vencedor} finalizou ${perdedor} com um poderoso golpe que o deixou com ${vidaPerdedor} pontos de vida.\\n`;\r\n        console.log(`O gladiador ${vencedor} finalizou ${perdedor} com um poderoso golpe que o deixou com ${vidaPerdedor} pontos de vida.`);\r\n    }\r\n}\r\nfunction ataque(atacante,defensor){\r\n\r\n    if(atacante.vida <= 0){\r\n        console.log(`O gladiador ${atacante.nome} não pode atacar pois está insconsciente`);\r\n    }else{\r\n    var dano = atacante.ataque - defensor.defesa\r\n    if(dano <= 0) dano = 1;\r\n    defensor.vida -= dano;\r\n    dados += `\\n ataque de ${atacante.nome} causa ${dano} pontos de dano em ${defensor.nome}! o mesmo fica com ${defensor.vida} pontos de hp!\\n`;\r\n    console.log(`ataque de ${atacante.nome} causa ${dano} pontos de dano em ${defensor.nome}! o mesmo fica com ${defensor.vida} pontos de hp!`);\r\n    if(defensor.vida <= 0){\r\n        venceu = true;\r\n    }\r\n}\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/batalha.js?')},"./src/model/TesteModel.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TesteModel; });\n/* harmony import */ var _src_ConfigClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/ConfigClass */ "./src/ConfigClass.js");\n\r\n//model para chamadas ajax\r\n\r\nconst caminho = `${_src_ConfigClass__WEBPACK_IMPORTED_MODULE_0__["default"].getUrlApi().toString()}/teste`\r\n\r\nclass TesteModel{\r\n    constructor(){\r\n\r\n    }\r\n\r\n    static getGladiadores(){\r\n        return fetch(caminho).then(response => {\r\n            if(response.status >= 400){\r\n                throw new Error(\'erro server\');\r\n            }\r\n\r\n            return response.json();\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/model/TesteModel.js?')},1:function(module,exports,__webpack_require__){eval('__webpack_require__(/*! ./src/controllers/indexController.js */"./src/controllers/indexController.js");\nmodule.exports = __webpack_require__(/*! ./src/js/batalha.js */"./src/js/batalha.js");\n\n\n//# sourceURL=webpack:///multi_./src/controllers/indexController.js_./src/js/batalha.js?')}});