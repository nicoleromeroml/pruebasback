    const express = require('express');
    const cors = require('cors')
    const bodyParser = require('body-parser');

    class Server {
        constructor(){
            this.app = express();
            this.app.port = process.env.PORT
            this.usuariosPath="/"
            this.middlewares();
            this.routes();
        }
        middlewares() {
            this.app.use(cors())
            this.app.use(bodyParser.json())
            this.app.use(express.static('public'));
        }
        routes() {
          this.app.use(this.usuariosPath, require('../routes/usuarios'))
                // this.app.get('/', function(req, res) {
                 // res.send('hola comision 59i desde back')
                //     res.json({mensaje: 'soy una api de usuarios'})
                // })
        }
        listen () {
            this.app.listen(3000, () => {
                console.log('server online en', this.app.port)
                console.log('puerto corriendo')
            })
        }a
    }
    module.exports = Server;