const {response, request} = require('express');

const usuariosPost = async (req = request, res = response) => {
        // const body = req.body;

    //!recibir el cuerpo de la peticion
    const datos = req.body;
    const {nombre, correo, password, rol} = datos;
    const usuario = new Usuario({nombre, correo, password, rol});

    //!verificar el correo
    const existeEmail = await Usuario.findOne({correo});
    if(existeEmail){
        return res.status(400).json({
            msg:"El correo ya existe"
        });
    }

    //guardar en la BD
    await usuario.save();

    res.json({
        usuario,
        msg: "Usuario creado correctamente"
    });
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