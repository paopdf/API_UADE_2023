// importo las variables declaradas en el env
require('dotenv').config();
// Importo express que es el entorno que me permite usar node js
const express= require('express');
// indico la conexión a la base de datos en la carpeta db
const {dbConnection} = require('./src/db/config');
const cors = require('cors');

// llamo a la funcion express que me permite crear un servidor
const app = express();
// hago la conexión a la base de datos
dbConnection();
// interpreta la request que esta llegando en formato json
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// cuando entre a la web de mi servidor me mandara una respuesta que es welcome server
// request cliente y response del servidor
app.get('/', (req, res) => {
    res.status(200).send('You are connected to the project');   
});
// se define una uri y un router para cada modelo en la carpeta models
app.use("/api/usuarios", require("./src/routes/usuarios.routes"));
app.use("/api/contactos", require("./src/routes/contactos.routes"));

// Le digo a la aplicacion escuchame este puerto
app.listen(process.env.PORT, () => {
    console.log('Server running on port :' ,process.env.PORT);      
});

module.exports = app;

// los proyectos se corren poniendo node y el name del archivo ej: node server o en el package.json puedo definir strats en un scripts.