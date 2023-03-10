const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
    nome: {type: String, unique: true, required: true},
    idade: {type: Number, required: true},
    genero: {type: String, required: true},
    senha: {type: String, required: true},
    email: {type: String, required: true},
});

const Usuario = mongoose.model("usuario", usuarioSchema);

module.exports = Usuario;