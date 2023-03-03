import React, { useEffect } from "react";
import styles from "../Card/Cards.module.css";
import { getApi } from '../../Redux/Actions'
import { useSelector, useDispatch } from "react-redux";


function Card() {
    const dispatch = useDispatch();
    const showCards = useSelector((state) => state.showCards)

    useEffect(() => {
        dispatch(getApi('https://rickandmortyapi.com/api/character'));
    }, []);

    return (
        <>
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