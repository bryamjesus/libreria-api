const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const collectionSchema = new Schema({
  genero_id: { type: Schema.ObjectId, ref: "genero", require: true },
  titulo: { type: String, require: true },
  fecha_creacion: { type: Date, default: Date.now() },
  estado: { type: String, default: 'A' } // A: activo | I: inactivo
})

module.exports = mongoose.model('libro', collectionSchema)