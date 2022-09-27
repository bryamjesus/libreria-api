const libroModel = require('../model/libroModel')

const controlador = {
  async getAllBook(req, res) {
    try {
      const result = await libroModel.find();
      res.json(result)
    } catch (e) {
      console.error(e)
      res.sendStatus(500)
    }
  },
  async saveBook(req, res) {
    try {
      const { genero_id, titulo } = req.body
      const libro = new libroModel();
      libro.genero_id = genero_id
      libro.titulo = titulo
      const result = await libro.save()
      res.json(result)
    } catch (e) {
      console.error(e)
      res.sendStatus(500)
    }
  }
}

module.exports = controlador