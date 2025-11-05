const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/recibir-datos', (req, res) => {
    const data = req.body;
    console.log('Datos recibidos:', data);
    // Aquí puedes guardar los datos en una base de datos o un archivo
    res.sendStatus(200);
});
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Servir un archivo HTML si existe (por ejemplo HitCapp.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'HitCapp.html'));
});

app.post('/recibir-datos', (req, res) => {
  const data = req.body;
  console.log('Datos recibidos:', data);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});