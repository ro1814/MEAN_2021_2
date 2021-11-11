//Librerias
const http = require('http')
const express = require('express')
//Librerías 'nuestras'//////////////////////////////////////
const mongoUtil = require("./bbdd/mongoDBUtil")
//Routers para express
const usuariosRouter = require("./rest/usuariosREST").router
const autenticacionRouter = require("./autenticacion/autenticacionRouter").router

//Primer paso: leer el fichero de configuracion
require("./util/configUtil")

//Segundo paso: conectar a la bbdd
//aqui cogo la promesa que se ha programado en mongoUtil
mongoUtil.conectarBBDD()
//aqui me traigo el then y el catch del archivo, lo paso aqui
    .then(function(){
        //esto es el resolve que mando desde desde mongoUtil
        //Tercer paso: arrancar el servidor
        arrancarServidor()
        //lo que sale de aqui es lo q entra en la funcion de la promesa del resolve del archivo MongoDBUtil
    })
    .catch(function(){
        process.exit(2)
        //lo que sale de aqui es lo que entra en reject del archivo MongoDBUtil
    })
    
function arrancarServidor(){
    console.log("Arrancando el servidor...")

    let app = express()

    //middleware
    app.use(express.json({
        limit: '5mb' //Tamaño máximo del body que estamos dispuestos a leer. IMPRESCINDIBLE
    }))       

    //Routers
    app.use(autenticacionRouter)
    app.use(usuariosRouter)

    http.createServer(app).listen(process.env.app_puerto, function(){
        console.log("Esperando peticiones en el puerto "+process.env.app_puerto)
    })

}
