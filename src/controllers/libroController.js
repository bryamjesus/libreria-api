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
  async getOneBook(req, res) {
    try {
      const result = await libroModel.findById(req.params.id);
      res.json(result)
    } catch (e) {
      console.error(e)
      res.sendStatus(500)
    }
  },
  async createBook(req, res) {
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
  },
  async editBook(req, res) {
    try {
      const { genero_id, titulo, estado } = req.body;
      const result = await libroModel.findByIdAndUpdate(req.params.id, { genero_id, titulo, estado }, { new: true });
      res.json(result)
    } catch (e) {
      console.error(e)
      res.sendStatus(500)
    }
  },
  async deleteBook(req, res) {
    try {
      await libroModel.findByIdAndDelete(req.params.id)
      res.sendStatus(200)
    } catch (e) {
      console.error(e)
      res.sendStatus(500)
    }
  }

}

module.exports = controlador