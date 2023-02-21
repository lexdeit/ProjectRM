import axios from "axios";
import React, { useEffect, useState } from "react";
import CardU from "./CardU";
import styles from "../Card/Cards.module.css";
import Buttons from "../Buttons/Buttons";
import { render } from "@testing-library/react";

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

    const renderizar = () => {

    }

    return (
        <>

            <div
                className={styles.tarjetas}>
                <CardU
                    // name={characters[0].name}
                    // gender={characters[0].gender}
                    // species={characters[0].species}
                    // image={characters[0].image}
                />
            </div>

            <div
                className={styles.botonesr}>
                

                <Buttons infoboton={"ANTERIOR"} funcion={nuevasTarjetasprev}></Buttons>
                <Buttons infoboton={"RANDOM"} funcion={renderizar}></Buttons>
                <Buttons infoboton={"SIGUIENTE"} funcion={nuevasTarjetasnext}></Buttons>

            </div>

        </>
    )
}