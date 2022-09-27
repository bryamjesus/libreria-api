const express = require('express');
const bookController = require('../controllers/libroController')

const router = express.Router()

router.get('/', (req, res) => {
  bookController.getAllBook(req, res)
})

router.get('/:id', (req, res) => {
  bookController.getOneBook(req, res)
})

router.post('/', (req, res) => {
  bookController.createBook(req, res)
})

router.put('/:id', (req, res) => {
  bookController.editBook(req, res)
})



module.exports = router;