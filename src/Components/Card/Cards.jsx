import React from "react";
import styles from "../Card/Cards.module.css";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";


function Card() {
    const showCards = useSelector((state) => state.showCards)
    const cards = useSelector((state) => state.cards)
    const favorites = useSelector((state) => state.favorites)


    return (
        <>
            <div
                className={styles.tarjetas}>

                {
                    cards.length < 1652 ? <Loading /> : showCards
                }

            </div>
        </>
    );
}

export default Card;