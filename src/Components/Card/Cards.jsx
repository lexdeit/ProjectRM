import React from "react";
import styles from "../Card/Cards.module.css";
import { useSelector } from "react-redux";
import About from "../About/About";

function Card() {
    const showCards = useSelector((state) => state.showCards)


    return (
        <>
            <div
                className={styles.tarjetas}>
                    <About></About>

                {
                    showCards
                }

            </div>
        </>
    )
}

export default Card;