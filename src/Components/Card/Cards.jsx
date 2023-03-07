import React from "react";
import styles from "../Card/Cards.module.css";
import { useSelector } from "react-redux";


function Card() {
    const showCards = useSelector((state) => state.showCards)
    const characters = useSelector((state) => state.characters)


    return (
        <>
            <div
                className={styles.tarjetas}>

                {
                    characters.length < 1652 ? <Loading /> : showCards
                }

            </div>
        </>
    )
}

export default Card;