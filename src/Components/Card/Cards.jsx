import axios from "axios";
import React, { useEffect, useState } from "react";
import CardU from "./CardU";
import styles from "../Card/Cards.module.css";
import Buttons from "../Buttons/Buttons";

export default function Card() {
    const [characters, setcharacter] = useState([]);
    const [showCard, setShowCard] = useState([]);
    const [cards, setcards] = useState([])


    const axiosCharacters = (url) => {
        axios.get(url)
            .then(response => {

                let nuevosCaracteres = response.data.results;
                setcharacter(prevCharacters => [...prevCharacters, ...nuevosCaracteres]);

                response.data.info.next ?
                    axiosCharacters(response.data.info.next)
                    : console.log("No hay mas paginas!");

            })
            .catch((error) => console.log(error));
    };



    useEffect(() => {
        axiosCharacters('https://rickandmortyapi.com/api/character');
    }, [])


    const nuevasCardU = () => {
        const tarjetasPersonaje = characters.map((personaje) => (
            <CardU
              key={personaje.id}
              name={personaje.name}
              gender={personaje.gender}
              species={personaje.species}
              image={personaje.image}
              funcion={setShowCard()}
            />
          ));
          
        setcards(tarjetasPersonaje)
    }


    const cerrarTarjeta = () => {
        setShowCard([])
      };
      
      
      

    const randomCard = () => {
        nuevasCardU();
        const randomNum = Math.floor(Math.random() * cards.length);
        const newShowCard = [...showCard, cards[randomNum]];
        setShowCard(newShowCard);
    };

    const mostrarinfo = () => {
        for (let i = 0; i < showCard.length; i++) {
            console.log(showCard);
        }
    }

    return (
        <>
            <div
                className={styles.botonesr}>

                <Buttons
                    infoboton={"PREV"}
                >
                </Buttons>

                <Buttons
                    infoboton={"Random"}
                    funcion={randomCard}>
                </Buttons>

                <Buttons
                    infoboton={"NEXT"}
                >
                </Buttons>

                <Buttons
                    infoboton={"Mostrar informacion"}
                    funcion={mostrarinfo}
                ></Buttons>

            </div>

            <div
                className={styles.tarjetas}>
                {cards.length >= 1 ? showCard : null}
            </div>
        </>
    )
}   