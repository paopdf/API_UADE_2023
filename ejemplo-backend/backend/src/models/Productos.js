const mongoose = require('mongoose');

const ContactosSchema = new mongoose.Schema({
    descripcion:String,
    categoria:String,
    precio_unitario:Number,
    url_img:String
});

const Contactos = mongoose.model('Contactos',ContactosSchema);

module.exports = Contactos;