const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.puerto = process.env.PORT || 3000;
    this.usuariosPath = "/api/usuarios";

    //Middlewares
    this.middelwares();

    //Rutas de mi aplicacion
    this.routes();
  }

  middelwares() {
    //CORS
    this.app.use(cors());

    //Lectura y parseo del body
    this.app.use(express.json());

    //Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routes/user.routes"));
  }

  getListen() {
    this.app.listen(this.puerto, () => {
      console.log(`Corriendo en el puerto ${this.puerto}`);
    });
  }
}

module.exports = Server;
