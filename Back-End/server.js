const express = require("express");
const server = express();
const router = require('./routes/index');
const routerFavs = require('./routes/favoritesroutes');
const cors = require("cors");


const PORT = process.env.PORT || 3001;


server.use(express.json());
server.use(cors());


server.use("/", router);
server.use("/rickandmorty", routerFavs);

server.listen(PORT);