const { Router } = require('express');
const addCharFav = require('../controllers/addCharFav');
const getCharFav = require('../controllers/getCharFav');
const deleteCharFav = require('../controllers/deleteCharFav');

const routerFavs = Router();

routerFavs.post('/fav', addCharFav);
routerFavs.get('/fav', getCharFav);
routerFavs.delete('/fav/:id', deleteCharFav);


module.exports = routerFavs;