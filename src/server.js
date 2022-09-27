const express = require('express');
const generoRoutes = require('./routes/generoRoutes')
const mongoose = require('mongoose');

const app = express()
const PORT = 3000

mongoose.connect('mongodb://127.0.0.1/libros')
  .then(() => {
    console.log('Conectados a la base de datos')
  }).catch(err => {
    console.log('Error al conectar a la base de datos: ', err);
  });

app.use(express.json())

app.use('/genero', generoRoutes)

app.listen(PORT, () => console.log(`🚀 Servidor iniciado en el puerto ${PORT}`))