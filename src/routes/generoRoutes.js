const express = require('express');
const controller = require('../controllers/generoController');

const router = express.Router()

router.get('/', (req, res) => {
  controller.listar(req, res)
})

router.get('/:id', (req, res) => {
  controller.listarId(req, res)
})

router.post('/', (req, res) => {
  controller.guardar(req, res)
})

router.put('/:id', (req, res) => {
  controller.editar(req, res)
})

router.delete('/:id', (req, res) => {
  controller.eliminar(req, res)
})

module.exports = router;