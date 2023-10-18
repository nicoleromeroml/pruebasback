// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hola comision!!!')
// })

// app.listen(8080)

const Server = require('./models/server');
require('dotenv').config()

const server = new Server();

server.listen()