const { Router } = require('express');
const getCharById = require('../controllers/getCharById');
const getCharDetail = require('../controllers/getCharDetail');


const routerCharacter = Router();

routerCharacter.get('/onsearch/:id', getCharById);
routerCharacter.get('/detail/:id', getCharDetail);



module.exports = routerCharacter;