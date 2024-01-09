const express = require('express')
const routes = require('./rutas/chatwood_hook')

class ServerHttp{
    app;
    port = process.env.PORT ?? 3003
    providerWs;
    constructor(_providerWs){
        this.providerWs = _providerWs
    }


    buildApp = () =>{
        return this.app = express()
        .use(express.json())
        .use((req, _, next) =>{
            req.providerWs = this.providerWs
            next()
        })
        .use(routes)
        .listen(this.port, () => console.log(`http://localhost:${this.port}`))
    }

    start(){
        this.buildApp()
    }
}


module.exports = ServerHttp