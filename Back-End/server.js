const { characters } = require('./data');
var http = require("http");
const PORT = 3001;



http
    .createServer((req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        const { url } = req;

        switch (url) {
            case "/rickandmorty/character":
                res.writeHead(200, { "Content-Type": "application/json" });
                return res.end(JSON.stringify(characters));

            default:
                res.writeHead(404);
                return res.end("La peticion que usted realizo es incorrecta!");
        }



    }).listen(PORT, "localhost")