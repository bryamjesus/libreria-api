const generoModel = require('../model/generoModel')

const controlador = {
  listar(req, res) {
    generoModel.find({}, (err, result) => {
      if (err) {
        console.log(err)
        res.sendStatus(500)
      } else {
        res.json(result);
      }
    });
  },
  guardar(req, res) {
    const genero = new generoModel();
    genero.nombre = req.body.nombre;
    genero.save((err, result) => {
      if (err) {
        console.log(err)
        res.sendStatus(500)
      } else {
        res.json(result);
      }
    })
  }
}

module.exports = controlador