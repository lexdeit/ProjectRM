import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../Card/Card.module.css"

export default function Card() {

    const [characters, setcharacter] = useState([]);

    const urlCharacters = 'https://rickandmortyapi.com/api/character';
    const axiosCharacters = () => {
        axios.get(urlCharacters)
            .then(response => {
                setcharacter(response.data.results);
            }).catch((error) => console.log(error))
    };

    useEffect(() => {
        axiosCharacters();
    }, [])

    const nuevasTarjetas = () => {
        let nuevasT = 'https://rickandmortyapi.com/api/character?page=3';
        axios.get(nuevasT)
        .then(response => {
            setcharacter(response.data.results);
        }).catch((error) => console.log(error))
    }

    return (
        <>

            <div class="flex space-x-2 justify-center">
                <button
                    onClick={nuevasTarjetas}
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >Click me</button>
            </div>

            <div className={styles.container}>

                {characters.map((personaje) => (
                    <div
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