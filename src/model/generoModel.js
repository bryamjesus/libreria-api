const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const generoSchema = new Schema({
  nombre: {type: String, require:true},
  fecha_creacion: {type: Date, default: Date.now()},
  estado: {type: String, default: 'A'} // A: activo | I: inactivo
})

module.exports = mongoose.model('genero', collectionSchema)