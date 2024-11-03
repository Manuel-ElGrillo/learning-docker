const http = require('http');

const server = http.createServer( (req, res) => {
    res.writeHead( 200, {'Content-Type': 'text/plain'});
    res.end( 'Ejercicio con Dockerhub usando una imagen de Node.' );
} );

const PORT = 3000;

server.listen( PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
} );