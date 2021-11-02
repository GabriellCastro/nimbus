const express = require('express');
const bodyParser = require('body-parser');
const forecastRoutes = require('./routes/forecastRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/forecast', forecastRoutes);

const PORT = 3000;

app.listen(PORT, () => console.log(`Servidor roda aqui ${PORT}`));
