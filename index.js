const express = require('express'); //importamos la libreria express
const connectDB = require('./config/db'); //importamos el archivo bd.js para usar sus funciones
const cors = require('cors');

//Creamos el servidor
const app = express();

//Llamamos a la funcion connectDB del archivo config/db.js
connectDB();

//MIDDLEWARES
//Habilitar el recibir JSON en nuestro servidor
app.use(express.json());

//utilizamos cors para temas de puerto
app.use(cors());


//establecemos la ruta usando el metodo .use de express (declarado como 'app' mas arriba).
app.use('/api/producto', require('./routes/producto')); //el primer parametro es como queremos que se llame la ruta, y el segundo es a que archivo llamara.





app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente');
})