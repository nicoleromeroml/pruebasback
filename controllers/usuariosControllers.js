const {response, request} = require('express');

const usuariosPost = (req, res) => {
        const body = req.body;
        res.json({mensaje: 'soy una api de usuarios POST',
        body
    })
}
const usuariosGet= (req, res) => {
        res.json({mensaje: 'soy una api de usuarios GET'})
}

const usuariosDelete = (req, res) => {
  
        res.json({mensaje: 'soy una api de usuarios DELETE'})
    
}
const usuariosUpdate = (req, res) => {
  
        res.json({mensaje: 'soy una api de usuarios PUT'})
    
}

module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPost,
    usuariosUpdate
}