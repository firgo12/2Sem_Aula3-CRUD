const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const scheme = new Schema({
    titulo: {
        type: String,
    },
    preco:{
        type: Number,
    }
})
module.exports = mongoose.model('Produto', scheme)
