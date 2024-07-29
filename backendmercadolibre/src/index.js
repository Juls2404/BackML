import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// En esta parte estamos creando una instancia para una aplicación Express.

const app = express();

const port= process.env.port || 9000;

app.get("/",(req, res) => {
    res.send("Esta es mi App");
})

app.listen(port,() => console.log("Server listening on port",port))


mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    userUnifiedTopology: true,
})
.then(() => console.log("Se está realizando la conexión a la base de datos"))
.catch((error) => console.error(error));