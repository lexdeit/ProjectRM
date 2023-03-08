import React from "react";
import styles from "../Card/Cards.module.css";
import { useSelector } from "react-redux";

function Card() {
    const showCards = useSelector((state) => state.showCards)


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