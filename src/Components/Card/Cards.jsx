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
                <CardU
                // name={characters[0].name} 
                // gender={characters[0].gender}
                // species={characters[0].species}
                // image={characters[0].image}
                />
                <CardU
                // name={characters[1].name} 
                // gender={characters[1].gender}
                // species={characters[1].species}
                // image={characters[1].image}
                ></CardU>
            </div>
            <hr></hr>
            <div class="flex space-x-2 justify-center">
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

            <div className={styles.card}>
                {characters.map((personaje) => (
                    <div className={styles.container}
                        id={personaje.id}
                        class="flex justify-center">

                        <div
                            class="rounded-lg shadow-lg bg-white max-w-sm">

                            <a href="#!">
                                <img
                                    class="rounded-t-lg"
                                    src={personaje.image}
                                    alt={personaje.name}
                                />
                            </a>

                            <div class="p-6">
                                <h5
                                    class="text-gray-900 text-xl font-medium mb-2">
                                    {personaje.name}
                                </h5>
                                <p
                                    class="text-gray-700 text-base mb-4">
                                    {personaje.gender}
                                </p>
                                <p
                                    class="text-gray-700 text-base mb-4">
                                    {personaje.location.name}
                                </p>
                                <p
                                    class="text-gray-700 text-base mb-4">
                                    {personaje.species}
                                </p>
                                <p
                                    class="text-gray-700 text-base mb-4">
                                    {personaje.origin.name}
                                </p>
                                <button
                                    type="button"
                                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </>
    )
}