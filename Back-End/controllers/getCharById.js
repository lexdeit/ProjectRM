const axios = require("axios");
const URL = `https://rickandmortyapi.com/api/character/`;




//Funcion que maneja en caso de exito!
const succesHandler = (response, res) => {
    const { id, image, name, gender, species } = response.data;
    res.WriteHead(200, { "Content-Type": "application/json" })
        && res.end(JSON.stringify({ id, image, name, gender, species }));
};


//Funcion que maneja en caso de error!
const errorHandler = (err, res) => {
    res.WriteHead(500, { "Content-Type": "text/plain" })
        && res.end(`${err.message}`);
};

//Funcion raiz que realiza la peticion y los llamados a la funcion exitosa o funcion de error!
const getCharById = (res, ID) => {

    axios
        .get(`${URL}${ID}`)
        .then(response => succesHandler(response, res))
        .catch(err => errorHandler(err, res));

};

module.exports = {
    getCharById,
};