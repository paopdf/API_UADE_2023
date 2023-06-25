//modelo creado para el ORM
//importo schema y mongoose
const mongoose = require('mongoose');
const { Schema } = mongoose;
// creo una instancia del obejto y definimos la estructura que tiene
const UsuariosSchema = new Schema({
    name:String,
    lastname:String,
    email:String,
    password:String
});
//le pido que me cree una coleccion de tipo usuarios con el esquema que declare arriba
// lo primero que hace cuando corre el proceso es fijarse si existe y si no se crea, la crea en plural
const Usuarios = mongoose.model('Usuarios',UsuariosSchema);

module.exports = Usuarios;