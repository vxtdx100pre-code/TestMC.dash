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

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});