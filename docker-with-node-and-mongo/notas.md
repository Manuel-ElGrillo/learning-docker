# Ejercicio: Configuración básica de Docker con Node y MongoDB

Este ejercicio tiene como objetivo crear un entorno de desarrollo local utilizando Docker para ejecutar una aplicación Node.js que se conecta a una base de datos MongoDB.

## Pasos

### 0. Tener abierto el Docker Desktop

### 1. Configurar el entorno del proyecto
Crea una carpeta para el proyecto y accede a ella desde la terminal.
```bash
   mkdir docker-with-node-and-mongo
   cd docker-with-node-and-mongo
```

### 2. Crear el proyecto de node
```bash
npm init -y
```

### 2.5. instalar dependendicas
```bash
npm i express mongoose
```

### 3. Crear el Dockerfile
```bash
# Usar la imagen base de Node.js
FROM node:18

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos de la aplicación
COPY . .

# Exponer el puerto en el que correrá la app
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "server.js"]
```

### 4. Crear el docker-compose.yml
```bash
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3001:3000"
    depends_on:
      - mongo
    environment:
      - MONGO_URI=mongodb://mongo:27017/dockerNodeMongo

  mongo:
    image: mongo:6
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:

```
### 5. Preparar los archivos de la aplicación Node.js

```js
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
```

### 6. Ejecutar los contenedores 
```bash
docker-compose up --build
```