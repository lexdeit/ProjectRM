let favs = require('../utils/favs');

const addCharFav = (req, res) => {
    res.status(200).json(favs);
}

module.exports = addCharFav;