const express = require('express');
const app = express();
// const PORT = 3000;

app.use(express.static(__dirname+'/public'));

app.get('/', (req, res) => {
  res.status(200).sendFile('/home.html', { root:'views' });
});

app.get('/productos', (req, res) => {
  res.status(200).sendFile('/productos.html', { root:'views' });
});

app.post('/crear-producto', (req, res) => {
  res.status(200).sendFile('/pedido.html', { root:'views' });
});

app.get('/crear-cuenta', (req, res) => {
  res.status(200).sendFile('/register.html', { root:'views' });
});


app.listen({ port: process.env.PORT || 4000 }, () => {
  console.log("Escuchando en http://localhost:" + 4000);
});

