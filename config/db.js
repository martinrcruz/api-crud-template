//IMPORTAMOS LA LIBRERIA MONGOOSE
const mongoose = require('mongoose');

//AHORA ACCEDEMOS A LAS VARIABLES DE ENTORNO CON LA EXTENSION DOTENV
require('dotenv').config({ path: 'constants.env' });

//CREAMOS CONSTANTE PARA CONECTARNOS A LA BD
const connectDB = async () => {

    try {
        await mongoose.connect(process.env.DB_MONGO,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        )

        console.log('Base de datos conectada!')



    } catch (error) {
        console.log(error);
        process.exit(1); //DETENEMOS LA APLICACION
    }
}
//EXPORTAMOS LA FUNCION PARA QUE SEA ACCESIBLE DESDE OTROS ARCHIVOS
module.exports = connectDB;

