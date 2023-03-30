const { Router } = require('express');
const routerFavs = require('./favoritesroutes');
const routerCharacter = require('./characterRoutes');


//Aqui se indica la ruta que se usara
const router = Router();

//Obtener detalles o buscar a un personaje por su ID - Siempre que la peticion sea a "/character"!
router.use("/character", routerCharacter);



//Obtener los personajes agregados a Favoritos/ Agregar a Favoritos /
//Eliminar de Favoritos peticion a "/favorites"
router.use("/favorites", routerFavs);



module.exports = router;