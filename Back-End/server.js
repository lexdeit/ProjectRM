const { characters } = require('./data');
var http = require("http");
const PORT = 3001;



http
    .createServer((req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        const { url } = req;
        const id = url.split("/").at(-1);

        switch (url) {


            case `/rickandmorty/character/${id}`:
                const character = characters.find(character => character.id == id);

                character ?

                    res.writeHead(200, { "Content-Type": "application/json" })
                    && res.end(JSON.stringify(character))
                    :
                    res.writeHead(404, { "Content-Type": "text/plain" })
                    && res.end("No se encontro un personaje con ese ID")

            break;

            case `/rickandmorty/characters`:

                res.writeHead(200, {"Content-Type": "application/json"})
                && res.end(JSON.stringify(characters))

            break;



            default:

                res.writeHead(404, { "Content-Type": "text/plain" })
                && res.end("No se encontro la URL proporcionada!");

            break;
        
        };

        // if (url.includes("rickandmorty/character/")) {
        //     const id = url.split("/").at(-1);
        //     const character = characters.find(character => character.id == id);

        //     res.writeHead(200, { "Content-Type": "application/json" })
        //         &&
        //         res.end(JSON.stringify(character));

        // };


    }).listen(PORT, "localhost");