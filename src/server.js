// Importando o express e instanciando
var express = require('express');
var app = express();

// Configurando o servidor para utilizar o EJS e passar o caminho para as views
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Rota principal
app.get('/', function (request, response) {
  response.render('index');
});

// Rota de adicionar
app.get('/adicionar', function (request, response) {
  response.render('adicionar');
});

// Iniciando o servidor
app.listen(3003, function () {
  console.log('Servidor iniciado na porta', 3003);
});