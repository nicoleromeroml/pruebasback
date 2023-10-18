const express = require('express')
const { usuariosGet, usuariosUpdate, usuariosDelete, usuariosPost } = require('../controllers/usuariosControllers')
// const body = require('body-parser');

const router = express.Router()

router.get('/api/usuarios', usuariosGet)
router.put('/api/usuarios/:id', usuariosUpdate)
router.delete('/api/usuarios/:id', usuariosDelete)

router.post('/api/usuarios', usuariosPost)

module.exports = router