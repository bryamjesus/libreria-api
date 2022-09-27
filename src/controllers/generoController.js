const model = require('../model/generoModel')

const controlador = {
  listar(req, res) {
    model.find({}, (err, result) => {
      if (err) {
        console.log(err)
        res.sendStatus(500)
      } else {
        res.json(result);
      }
    });
  },
  guardar(req, res) {

  }
}

module.exports = controlador