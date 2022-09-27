const generoModel = require('../model/generoModel')

const controlador = {
  async listar(req, res) {
    try {
      const result = await generoModel.find();
      res.json(result)
    } catch (e) {
      console.log(e)
      res.sendStatus(500)
    }

    // generoModel.find({}, (err, result) => {
    //   if (err) {
    //     console.log(err)
    //     res.sendStatus(500)
    //   } else {
    //     res.json(result);
    //   }
    // });
  },
  async listarId(req, res) {
    try {
      const result = await generoModel.findById(req.params.id)
      res.json(result)
    } catch (e) {
      console.log(e)
      res.sendStatus(500)
    }
  },
  async guardar(req, res) {
    try {
      const genero = new generoModel();
      genero.nombre = req.body.nombre;
      const result = await genero.save();
      res.json(result);
    } catch (e) {
      console.log(e)
      res.sendStatus(500)
    }
    // const genero = new generoModel();
    // genero.nombre = req.body.nombre;
    // genero.save((err, result) => {
    //   if (err) {
    //     console.log(err)
    //     res.sendStatus(500)
    //   } else {
    //     res.json(result);
    //   }
    // })
  },
  async editar(req, res) {
    try {
      const { id } = req.params
      const { nombre, estado } = req.body
      const result = await generoModel.findByIdAndUpdate(id, { nombre, estado }, { new: true })
      res.json(result);
    } catch (e) {
      console.log(e)
      res.sendStatus(500)
    }
  },
  async eliminar(req, res) {
    try {
      await generoModel.findByIdAndDelete(req.params.id)
      res.sendStatus(200)
    } catch (e) {
      console.log(e)
      res.sendStatus(500)
    }
  }

}

module.exports = controlador