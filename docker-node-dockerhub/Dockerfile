# Usa la imagen base de Node.js desde Docker Hub
FROM node:18

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto de la aplicación al contenedor
COPY . .

# Expone el puerto en el que el servidor escucha
EXPOSE 3000

# Define el comando para ejecutar la aplicación
CMD ["node", "server.js"]
