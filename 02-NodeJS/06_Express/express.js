//npm install express
const express = require("express")

//Cuando invocamos la funcion express nos devueven un objeto del tipo función
//Esa es la función que procesará todas las peticiones entrantes
let app = express()

//El objeto 'app' es la función que se le proporciona al servidor cuando se invoca 'createServer'
//const http = require("http") //Express ya incluye este require
//http
//    .createServer(app)
//    .listen(4000, function(){
//        console.log("Esperando peticiones en el puerto 4000")
//    })

//
//Indicando el puerto y arrancando el servidor directamente con express
//
app.listen(4000, function(){
    console.log("Esperando peticiones en el puerto 4000")
})

//////////////////////////
// CONFIGURANDO EXPRESS //
//////////////////////////

//URLS Y METODOS

app.get("/saludar", saludar)
app.post("/discos", insertarDisco)

function saludar(request, response){
    response.end("Hola que tal!")
}

function insertarDisco(request, response){
    response.end("Disco insertado")
}

//Podemos definir el callback en la propia llamada a get, post, put...
//Pero QUEDA FEISIMO!
app.get('/pagina', function(request, response){
    let html = `
        <html>
            <body>
                <marquee>
                    <h1>Html generado dinamicamente con Node.JS + Express</h1>
                </marquee>
            </body>
        </html>`;
    response.setHeader('Content-type', 'text/html')
    response.end(html)
})