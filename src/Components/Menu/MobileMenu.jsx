import React from "react";
import styles from '../Menu/MobileMenu.module.css';
import { addCard, eliminarCard, aboutMe, home } from '../../Redux/Actions';
import { useSelector, useDispatch } from "react-redux";

export default function Mobilemenu() {
    const dispatch = useDispatch();
    const characters = useSelector((state) => state.characters);


    return (
        <>
            <nav className={styles.menu}>
                <ul className={styles.mobilem}>
                    <span className={styles.home} onClick={() => dispatch(home())}></span>

                    <span className={styles.random} onClick={() => {
                        dispatch(
                            addCard(characters[Math.floor(Math.random() * characters.length)]))
                    }}></span>

                    <span className={styles.favorite}></span>
                    <span className={styles.basura} onClick={() => {
                        dispatch(eliminarCard())
                    }}></span>
                    <span className={styles.about} onClick={
                        () => dispatch(aboutMe())
                    }></span>
                </ul>
            </nav>
        </>
    )

}