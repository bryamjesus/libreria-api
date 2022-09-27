const model = require('../model/generoModel')

const controlador = {
  listar(req, res) {
    model.find();
  }
}

module.exports = controlador