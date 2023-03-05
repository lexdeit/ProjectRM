import React from 'react';
import Buttons from '../Buttons/Buttons';
import styles from '../Menu/Menu.module.css';
import SearchBar from '../SearchBar/Search';
import { randomCardR, eliminarCard } from '../../Redux/Actions';
import { useSelector, useDispatch } from "react-redux";

function MenuHome() {
    const dispatch = useDispatch();
    const cards = useSelector((state) => state.cards)



    return (
        <>

            <div className={styles.containermenu}>
                <nav className={styles.menu}>
                    <ul className={styles.texto}>
                        <img
                            src='https://image.tmdb.org/t/p/original/kCyZc7mvqHdeUGpguSGxsWPxqpI.png'
                            className={styles.logo} />

                        <Buttons
                            infoboton={"Inicio"}
                            funcion={() => {
                                alert("Simulando inicio")
                            }}
                        />

                        <Buttons
                            infoboton={"Tarjeta Random"}
                            funcion={() => {
                                dispatch(randomCardR(
                                    cards[Math.floor(Math.random() * cards.length)]
                                ))
                            }}
                        />

                        <Buttons
                            infoboton={"Eliminar Tarjetas"}
                            funcion={() => {
                                dispatch(eliminarCard())
                            }}
                        />

                        <Buttons
                            infoboton={"Contacto"}
                        />

                        <SearchBar></SearchBar>
                    </ul>
                </nav>

            </div>
        </>
    )

}

export default MenuHome;