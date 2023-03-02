import React, { useEffect } from "react";
import styles from "../Card/Cards.module.css";
import Buttons from "../Buttons/Buttons";
import { getApi, randomCardR, eliminarCard} from '../../Redux/Actions'
import { useSelector, useDispatch } from "react-redux";


function Card() {
    const dispatch = useDispatch();
    const characters = useSelector((state) => state.characters)
    const cards = useSelector((state) => state.cards)
    const showCards = useSelector((state) => state.showCards)

    useEffect(() => {
        dispatch(getApi('https://rickandmortyapi.com/api/character'));
    }, []);


    const randomCard = () => {
        dispatch(
            randomCardR(cards[Math.floor(Math.random() * cards.length)])
        )
    };

    const eliminarCards = (id) => {
        dispatch(
            eliminarCard(id)
        )
    };

    const status = () => {
        console.log(characters);
    }

    const eliminar = () => {

    };

    return (
        <>
            <div
                className={styles.botonesr}>

                <Buttons
                    infoboton={"Eliminar"}
                    funcion={eliminarCards}
                />

                <Buttons
                    infoboton={"Random"}
                    funcion={randomCard}
                />

                <Buttons
                    infoboton={"RandomCardR"}
                    funcion={() => { randomCardR() }}
                />

                <Buttons
                    infoboton={"Status"}
                    funcion={() => { status() }}
                />

            </div>

            <div
                className={styles.tarjetas}>

                {
                    showCards
                }

            </div>
        </>
    );
}

export default Card;