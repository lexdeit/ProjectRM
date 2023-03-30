const express = require("express");
const server = express();
const router = require('./routes/index');
const cors = require("cors");

//Se encarga de asignar el puerto en el se va a levantar el servidor!
const PORT = process.env.PORT || 3001;

//Son Middlewares por donde pasa la peticion antes de ir a las rutas!
server.use(express.json());
server.use(cors());

//Se levanta el servidor y se le asigna el camino que tomara la peticion a traves del "router"!
server.use("/", router);


//El puerto en el que escuchara el servidor!
server.listen(PORT);