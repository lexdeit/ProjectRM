import axios from "axios"

const getCharById = (res, ID) => {
    axios.get(`https://rickandmortyapi.com/api/character/${ID}`)
    .then(response => response.data)
    .then(data => )
}

module.exports = {
    getCharById,
}