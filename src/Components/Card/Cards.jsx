import axios from "axios";
import React, { useEffect, useState, component } from "react";
import CardU from "./CardU";
import styles from "../Card/Cards.module.css";
import Buttons from "../Buttons/Buttons";

export default function Card() {
    const [tarjetasnext, settarjetanext] = useState([])
    const [tarjetasprev, settarjetaprev] = useState([])
    const [characters, setcharacter] = useState([]);
    const [showCard, setShowCard] = useState(false);

    let urlCharacters = {
        url: 'https://rickandmortyapi.com/api/character',
        data: [],
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
        tarjetasnext.length >= 1 ? axiosCharacters?.(tarjetasnext)
            : console.log("No hay más tarjetas!");
    }

    const nuevasTarjetasprev = () => {
        tarjetasprev.length >= 1 ? axiosCharacters?.(tarjetasprev)
            : console.log("No hay más tarjetas!");
    }

    const cerrarTarjeta = () => {
        showCard ? setShowCard(false)
            : console.log("No hay mas tarjetas!");
    }
    const renderizarf = () => {
        setShowCard(true);
    }

    const randomCard = () => {
        const randomNum = Math.floor(Math.random() * characters.length);
        return (
            <div
            className={styles.tarjetas}>

                <CardU
                    name={characters[randomNum].name}
                    gender={characters[randomNum].gender}
                    species={characters[randomNum].species}
                    image={characters[randomNum].image}
                    funcion={cerrarTarjeta}
                />

            </div>
        )
    }


    return (
        <>
            <div
                className={styles.botonesr}>

                <Buttons
                    infoboton={"PREV"}
                    funcion={nuevasTarjetasprev}>
                </Buttons>

                <Buttons
                    infoboton={"Random"}
                    funcion={renderizarf}>
                </Buttons>

                <Buttons
                    infoboton={"NEXT"}
                    funcion={nuevasTarjetasnext}>
                </Buttons>

            </div>
            
            {showCard ? randomCard() : null}
        </>
    )
}