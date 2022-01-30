var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/');

var clienteSchema = new mongoose.Schema({
    nome: String,
    cpf: String
}, { collection: 'usercollection' }
);

module.exports = { Mongoose: mongoose, clienteSchema: clienteSchema }