const axios = require("axios");
const URL = `https://rickandmortyapi.com/api/character/`;


const getCharById = (req, res) => {
    const { id } = req.params;

    axios
        .get(`${URL}${id}`)
        .then(response => {
            const { id, name, species, image, gender } = response.data;
            res.status(200).json({ id, name, species, image, gender });
        })
        .catch(err => res.status(500).json({ err: err.message })
        );

};

module.exports = getCharById;
