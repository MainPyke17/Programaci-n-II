// import mongoose from "mongoose";

 /* mongoose.connect("mongodb://localhost/usuarios",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
})
    .then( db => console.log("esta conectada la base de datos"))
    .then( error => console.log(error))
*/

const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost/usuarios'; // Asegúrate de usar tu URI de conexión correcta

async function connectDB() {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Db is connected");
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
}

connectDB();
