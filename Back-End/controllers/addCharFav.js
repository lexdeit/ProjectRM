let favorites = require("../utils/favs");

const addCharFav = (req, res) => {

    favorites.push(req.body);
    res.status(200).json({ status: "El personaje se agrego correctamente!" });

};

module.exports = addCharFav;