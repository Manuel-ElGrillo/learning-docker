# Usa una imagen base de Node.js
FROM node:alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente
COPY ./src ./src

# Expone el puerto que usa el servidor
EXPOSE 3000

# Comando por defecto para ejecutar el servidor
CMD ["npm", "start"]
