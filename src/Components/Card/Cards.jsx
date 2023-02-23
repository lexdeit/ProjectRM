import React, { useEffect, useState } from "react";
import CardU from "./CardU";
import styles from "../Card/Cards.module.css";
import Buttons from "../Buttons/Buttons";
import axiosCharacters from "../API - Peticion/Api";


export default function Card() {
    const [characters, setcharacter] = useState([]);
    const [showCard, setShowCard] = useState([]);
    const [cards, setcards] = useState([]);


    useEffect(() => {
        axiosCharacters("https://rickandmortyapi.com/api/character", setcharacter);
    }, []);

    const nuevasCardU = () => {
        console.log("Se ejecuto nuevasCardU");
        setcards(
            characters.map((personaje) => (
                <CardU
                    key={personaje.id}
                    name={personaje.name}
                    gender={personaje.gender}
                    species={personaje.species}
                    image={personaje.image}
                    onClick={() => eliminarCard(personaje.id)}
                />
            ))
        );
    };

    useEffect(() => {
        nuevasCardU()
    }, [characters])

    const randomCard = () => {
        setShowCard([...showCard, cards[Math.floor(Math.random() * cards.length)]])
    };

    const eliminarCard = (id) => {
        setShowCard((showCard) =>
            showCard.filter((card) =>
                card.key !== `${id}`));
    };


    const eliminar = () => {
        setShowCard([])
    };

    return (
        <>
            <div
                className={styles.botonesr}>

                <Buttons
                    infoboton={"Eliminar"}
                    funcion={eliminar}
                />

                <Buttons
                    infoboton={"Random"}
                    funcion={randomCard}
                />

            </div>

            <div
                className={styles.tarjetas}>

                {
                    showCard
                }

            </div>
        </>
    );
}
