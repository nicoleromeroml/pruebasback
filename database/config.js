const mongoose = require('mongoose')

const dbConection = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_CNN)
        console.log('BASE DATos CONECTADA')
    }catch(error){
        throw new Error('error a la hs de inic la BD')

    }
}
module.exports = { dbConection }