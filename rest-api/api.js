const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const api = express();
const port = 2000;
const router = express.Router();

const testeRouter = require('./router/testeRouter');

api.use(cors());

api.use(bodyparser.urlencoded({extended: true}))
api.use(bodyparser.json());

router.get("/", (req,res) => {
    res.json({
        mensagem: "api está online!"
    })
})

api.use('/', router);
api.use('/teste', testeRouter);

api.listen(port);
console.log("api rodando com express");