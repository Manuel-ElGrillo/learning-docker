# 1. Usamos una imagen base oficial de Nginx (servidor web)
FROM nginx:alpine

# 2. Copiamos el contenido de la carpeta "src" a la ruta donde Nginx sirve los archivos
COPY src /usr/share/nginx/html

# 3. Exponemos el puerto 80 para acceder al servidor Nginx desde fuera del contenedor
EXPOSE 80
