const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.use(express.json());

//Conexión a mongo
try {
    mongoose.connect('mongodb://mongo:27017/dockerNodeMongo', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
} catch (error) {
    console.log("Error: ", error.message);
}

//Rutas
app.get('/', (req, res) => {
    res.send('Hola desde Node & Mongo Docker!! :D');
});

//Listener
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
});