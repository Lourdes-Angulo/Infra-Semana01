const http = require('http')
require('dotenv').config()

const stage = process.env.STAGE;
const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    console.log(`Hola desde ${stage}`)
    res.end(`Hola desde ${stage}`)
})

server.listen(port, hostname, ()=>{
    console.log(`Servidor Corriendo en http://${hostname}:${port}`)
})