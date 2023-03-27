const axios = require("axios");
const URL = `https://rickandmortyapi.com/api/character/`;

const succesHandler = (response, res) => {
  const { image, name, gender, status, origin, species } = response.data;
  res.writeHead(200, { "Content-Type": "application/json" })
    && res.end(JSON.stringify({ image, name, gender, status, origin, species }));
}

const errorHandler = (err, res) => {
  res.writeHead(500, { "Content-Type": "text/plain" })
    && res.end(`${err.message}`)
}



const getCharDetail = (res, ID) => {

  axios
    .get(`${URL}${ID}`)
    .then(response => succesHandler(response, res))
    .catch(err => errorHandler(err, res))

}

module.exports = getCharDetail;