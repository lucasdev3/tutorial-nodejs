const express = require('express');
const app = express();

app.use(express.static(__dirname + "/public/css/"));
app.use(express.static(__dirname + "/public/icons/"));
app.use(express.static(__dirname + "/public/todolist/"));
app.use(express.static(__dirname + "/public/jogodanave/"));

const port = process.env.PORT || 8080;




app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get('/todolist', function (req, res) {
    res.sendFile(__dirname + "/public/templates/todolist.html");
  });

app.get('/jogodanave', function (req, res) {
  res.sendFile(__dirname + "/public/templates/jogodanave.html");
});


app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}: https://localhost:8080`);
});


