const express = require('express')
class server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //midlewares
         this.middlewares();

        this.routes();
    }
    middlewares(){
        //directorio middleware
        this.app.use( express.static('public'))
    }
    routes(){
        this.app.get('/', (req, res) => {
            res.send('Hello World')
          });
    }
    listen(){
        this.app.listen(this.port,()=> {
            console.log('servidor corriendo en puerto',this.port);
        });

    }
}
module.exports = server;