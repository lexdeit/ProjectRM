import axios from "axios";
import React, { useEffect, useState, component } from "react";
import CardU from "./CardU";
import styles from "../Card/Cards.module.css";
import Buttons from "../Buttons/Buttons";

export default function Card() {
    const [tarjetasnext, settarjetanext] = useState([])
    const [tarjetasprev, settarjetaprev] = useState([])
    const [characters, setcharacter] = useState([]);
    const [showCard, setShowCard] = useState([]);
    const [cards, setcards] = useState([])

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

    
    const nuevasCardU = () => {
        const tarjetasPersonaje = characters.map((personaje) => (
            <CardU
                key={personaje.id}
                name={personaje.name}
                gender={personaje.gender}
                species={personaje.species}
                image={personaje.image}
                funcion={cerrarTarjeta}
            />
        ))
        setcards(tarjetasPersonaje)
    }
    
    const nuevasTarjetasnext = () => {
        tarjetasnext.length >= 1 ? axiosCharacters?.(tarjetasnext)
        : console.log("No hay más tarjetas!");
    }
    
    const nuevasTarjetasprev = () => {
        tarjetasprev.length >= 1 ? axiosCharacters?.(tarjetasprev)
        : console.log("No hay más tarjetas!");
    }
    
    const cerrarTarjeta = () => {
        
    }
    
    
    const randomCard = () => {
        nuevasCardU();
        const randomNum = Math.floor(Math.random() * cards.length);
        showCard.push(cards[randomNum]);
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
                    funcion={randomCard}>
                </Buttons>

                <Buttons
                    infoboton={"NEXT"}
                    funcion={nuevasTarjetasnext}>
                </Buttons>

            </div>


            <div
                className={styles.tarjetas}>
                {cards.length >= 1 ? showCard : null}
            </div>
        </>
    )
}   