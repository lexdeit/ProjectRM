let favorites = require('../utils/favs');

const deleteCharFav = (req, res) => {
    const { id } = req.params;

    favorites = favorites.filter(character => character.id != id);

    res.status(200).json({ status: "Se elimino correctamente!" });
}

module.exports = deleteCharFav;