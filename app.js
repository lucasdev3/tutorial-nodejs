const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html");
})

app.get('/contato', function (req, res) {
    res.send('Página de contato');
  })

app.listen(port, () => {
    console.log("Servidor iniciado na porta 8080: https://localhost:8080");
});