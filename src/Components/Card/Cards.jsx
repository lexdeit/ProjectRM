import axios from "axios";
import React, { useEffect, useState } from "react";
import CardU from "./CardU";
import styles from "../Card/Cards.module.css";
import Buttons from "../Buttons/Buttons";

const axiosCharacters = async (url, setcharacter) => {
    try {
        const response = await axios.get(url);
        const nuevosCaracteres = response.data.results;
        setcharacter((characters) => [...characters, ...nuevosCaracteres]);

        response.data.info.next ?
            axiosCharacters(response.data.info.next, setcharacter)
            : console.log("Se cargo toda la base de datos!");

    } catch (error) {
        console.log(error);
    }
};

export default function Card() {
    const [characters, setcharacter] = useState([]);
    const [showCard, setShowCard] = useState([]);
    const [cards, setcards] = useState([]);
    

    useEffect(() => {
        axiosCharacters("https://rickandmortyapi.com/api/character", setcharacter);
    }, []);
    
    const nuevasCardU = () => {
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

    const randomCard = () => {
        cards.length < 1 ?
            nuevasCardU()
            : setShowCard([...showCard, cards[Math.floor(Math.random() * cards.length)]])
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
