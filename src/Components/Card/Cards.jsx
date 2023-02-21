import axios from "axios";
import React, { useEffect, useState } from "react";
import CardU from "./CardU";
import styles from "../Card/Cards.module.css";

export default function Card() {
    const [tarjetasnext, settarjetanext] = useState([])
    const [tarjetasprev, settarjetaprev] = useState([])
    const [characters, setcharacter] = useState([]);

    let urlCharacters = {
        url: 'https://rickandmortyapi.com/api/character',
        data: []
    };

    const axiosCharacters = (url) => {
        axios.get(url)
            .then(response => {
                setcharacter(response.data.results);
                settarjetanext(response.data.info.next);
                settarjetaprev(response.data.info.prev);
            }).catch((error) => console.log(error))
    };

    useEffect(() => {
        axiosCharacters(urlCharacters.url);
    }, [])

    const nuevasTarjetasnext = () => {
        tarjetasnext.length >= 1 ? axiosCharacters?.(tarjetasnext) : console.log("No hay más tarjetas!");
    }

    const nuevasTarjetasprev = () => {
        tarjetasprev.length >= 1 ? axiosCharacters?.(tarjetasprev) : console.log("No hay más tarjetas!");
    }

    return (
        <>

            <div className={styles.tarjetas}>
                {/* <CardU
                    name={characters[0].name}
                    gender={characters[0].gender}
                    species={characters[0].species}
                    image={characters[0].image}
                />
                <CardU
                    name={characters[1].name}
                    gender={characters[1].gender}
                    species={characters[1].species}
                    image={characters[1].image}
                ></CardU>
                <CardU
                    name={characters[2].name}
                    gender={characters[2].gender}
                    species={characters[2].species}
                    image={characters[2].image}
                ></CardU>
                <CardU
                    name={characters[3].name}
                    gender={characters[3].gender}
                    species={characters[3].species}
                    image={characters[3].image}
                ></CardU>
                <CardU
                    name={characters[4].name}
                    gender={characters[4].gender}
                    species={characters[4].species}
                    image={characters[4].image}
                ></CardU>
                <CardU
                    name={characters[5].name}
                    gender={characters[5].gender}
                    species={characters[5].species}
                    image={characters[5].image}
                ></CardU> */}
            </div>
            <div
                class="flex space-x-2 justify-center"
                className={styles.botonesr}>
                <button
                    onClick={nuevasTarjetasprev}
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >Anterior</button>
                <button
                    onClick={nuevasTarjetasnext}
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >Siguiente</button>
            </div>

        </>
    )
}