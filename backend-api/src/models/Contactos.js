const mongoose = require('mongoose');

const ContactosSchema = new mongoose.Schema({
    nombre:String,
    telefono:String,
    mail:String,
    mensaje:String
});

const Contactos = mongoose.model('Contactos',ContactosSchema);

module.exports = Contactos;