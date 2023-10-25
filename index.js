// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hola comision!!!')
// })

// app.listen(8080)

const Server = require('./models/server');
require('dotenv').config()
const mongoose = require('mongoose')


mongoose
  .connect(
    'mongodb+srv://feliantobelenju:XC6f7K3y1Zn3tJNB@clusterprueba.obwiz9j.mongodb.net'
  )
  .then(() => {
    console.log(`mongoDB Conected Matias sos Crack Brooo back v0.5`);
  })
  .catch((err) => {
    console.log(err.message);
  });

const server = new Server();

server.listen()