const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname)); // Servir archivos estáticos

// Servir el archivo HTML principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'HitCapp.html'));
});

// Endpoint para recibir datos
app.post('/recibir-datos', (req, res) => {
  const data = req.body;
  console.log('Datos recibidos:', data);
  res.sendStatus(200);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
