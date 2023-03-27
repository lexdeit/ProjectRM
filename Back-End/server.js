const http = require("http");
const getCharById = require("./controllers/getCharById");
const getCharDetail = require("./controllers/getCharDetail");
const PORT = 3001;

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req;
    const id = url.split("/").at(-1);


    switch (true) {

        case url.includes("onsearch"):
            getCharById(res, id)
            break;

        case url.includes("detail"):
            getCharDetail(res, id);
            break;


        default:

            break;
    }

});

server.listen(PORT, "localhost");