let favorites = require('../utils/favs');

const deleteCharFav = (req, res) => {
    const { id } = req.params;

    favorites = favorites.flat().filter(character => character.id != id);

    res.status(200).json({ status: "Se elimino correctamente!", favorites});
}

module.exports = deleteCharFav;
