import axios from "axios";

export default async function axiosCharacters (url, setcharacter) {
    let response = await axios.get(url);
    let nuevosCaracteres = response.data.results;

    setcharacter((characters) => [...characters, ...nuevosCaracteres]);
    response.data.info.next?
    axiosCharacters(response.data.info.next, setcharacter)
    :console.log("Se cargo toda la base de Datos!");

}