const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

// View engine
app.set('view engine', 'ejs');

// Config para o express trabalhar com arquivos staticos
// Static
app.use(express.static('public'));

// Body Parser - Dizendo pro Express que quero usar o body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); // Dizendo pro body-parser que além dos dados de formulário tb aceita dados no formato json

// Database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso!");
    }).catch((error) => {
        console.log(error)
    })

app.get("/", (req, res) => {
    res.render("index");
})

app.listen(8080, () => {
    console.log("O servidor está rodando!");
})