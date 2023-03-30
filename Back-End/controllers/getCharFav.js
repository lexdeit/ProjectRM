let favorites = require('../utils/favs');

const addCharFav = (req, res) => {
    res.status(200).json(favorites);
}

module.exports = addCharFav;