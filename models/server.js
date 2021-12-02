const express = require('express')
const cors = require('cors')
class server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuarioPath = '/api/usuarios';

        //midlewares
         this.middlewares();

        this.routes();
    }
    middlewares(){
        //directorio middleware
        this.app.use( express.static('public'));
        this.app.use( express.json() );
        this.app.use(cors());

    }
    routes(){
       this.app.use(this.usuarioPath,require('../routes/usuarios'));
    }
    listen(){
        this.app.listen(this.port,()=> {
            console.log('servidor corriendo en puerto',this.port);
        });

    }
}
module.exports = server;