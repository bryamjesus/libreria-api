const express = require('express');
const controlador = require('../controllers/generoController');

const router = express.Router()

router.get('/', (req, res) => {
  controlador.listar(req, res)
})

router.post('/',(req, res) => {
  controlador.guardar(req, res)
})

module.exports = router;