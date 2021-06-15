const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname+'/public'));

app.get('/', (req, res) => {
  res.status(200).sendFile('/home.html', { root:'views' });
});

app.listen(PORT, () => {
  console.log("Escuchando en http://localhost:" + PORT);
});