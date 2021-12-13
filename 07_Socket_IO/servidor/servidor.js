//npm install socket.io
const socketIO = require("socket.io")
const http = require("http")

//Utilizaremos express para servir el cliente (y para otra cosa)
const express = require("express")

let app = express()
app.use(express.static("./recursos"))
app.listen(80, function(){
    console.log("Esperando peticiones HTTP en el puerto 80")
})


