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
                    characters.length === 1652 ? showCards : <Loading/>
                }

            </div>
        </>
    )
}

export default Card;