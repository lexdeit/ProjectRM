import React from 'react';
import Buttons from '../Buttons/Buttons';
import styles from '../Menu/Menu.module.css';
import SearchBar from '../SearchBar/Search';
import { addCard, eliminarCard } from '../../Redux/Actions';
import { useSelector, useDispatch } from "react-redux";

function MenuHome() {
    const dispatch = useDispatch();
    const characters = useSelector((state) => state.characters);



    return (
        <>

            <div className={styles.containermenu}>
                <nav className={styles.menu}>
                    <ul className={styles.texto}>
                        <img
                            src='https://image.tmdb.org/t/p/original/kCyZc7mvqHdeUGpguSGxsWPxqpI.png'
                            className={styles.logo} />

                        <Buttons
                            infoboton={"HOME"}
                            funcion={() => {
                                alert("Simulando inicio")
                            }}
                        />

                        <Buttons
                            infoboton={"RANDOM CARD"}
                            funcion={() => {
                                dispatch(addCard(
                                    characters[Math.floor(Math.random() * characters.length)]
                                ))
                            }}
                        />

                        <Buttons
                            infoboton={"FAVORITES"}
                        />
                        
                        <Buttons
                            infoboton={"DELETE CARDS"}
                            funcion={() => {
                                dispatch(eliminarCard())
                            }}
                        />


                        <Buttons
                            infoboton={"ABOUT ME"}
                        />

                        <SearchBar></SearchBar>
                    </ul>
                </nav>

            </div>
        </>
    )

}

export default MenuHome;