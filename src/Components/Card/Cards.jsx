import React from "react";
import styles from "../Card/Cards.module.css";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";

function Card() {
    const showCards = useSelector((state) => state.showCards)
    const characters = useSelector((state) => state.characters)


    return (
        <>
            <div
                className={styles.tarjetas}>

                {
                    showCards
                }

            </div>
        </>
    )
}

export default Card;