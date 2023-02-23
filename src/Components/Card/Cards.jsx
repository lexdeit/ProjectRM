import axios from "axios";
import React, { useEffect, useState } from "react";
import CardU from "./CardU";
import styles from "../Card/Cards.module.css";
import Buttons from "../Buttons/Buttons";

export default function Card() {
    const [characters, setcharacter] = useState([]);
    const [showCard, setShowCard] = useState([]);
    const [cards, setcards] = useState([]);

    const axiosCharacters = async (url) => {
        await axios
            .get(url)
            .then((response) => {
                let nuevosCaracteres = response.data.results;
                setcharacter((prevCharacters) => [...prevCharacters, ...nuevosCaracteres]);

                response.data.info.next? 
                axiosCharacters(response.data.info.next)
                :console.log("Se cargo toda la base de datos!");
                
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        axiosCharacters("https://rickandmortyapi.com/api/character");
    }, []);

    const nuevasCardU = () => {
        const tarjetasPersonaje = characters.map((personaje) => (
            <CardU
                key={personaje.id}
                name={personaje.name}
                gender={personaje.gender}
                species={personaje.species}
                image={personaje.image}
                onClick={() => {
                    setShowCard((prevCards) =>
                    prevCards.filter((card) => card.key !== personaje.id.toString())
                    );
                }}
            />
        ));

        setcards(tarjetasPersonaje);
    };

    const randomCard = () => {
        cards.length >= 1
            ? setShowCard([...showCard,cards[Math.floor(Math.random() * cards.length)],])
            : nuevasCardU();
    };

    const eliminar = () => {
        setShowCard([])
    };

    return (
        <>
            <div className={styles.botonesr}>
                <Buttons infoboton={"Eliminar"} funcion={eliminar}/>
                <Buttons infoboton={"Random"} funcion={randomCard} />
            </div>

            <div className={styles.tarjetas}>
                {cards.length >= 1 ? showCard : null}
            </div>
        </>
    );
}
