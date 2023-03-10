import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { addCard, eliminarCard, aboutMe, home } from '../../Redux/Actions';
import styles from '../Menu/Menu.module.css';
import Buttons from '../Buttons/Buttons';
import SearchBar from '../SearchBar/Search';


function MenuHome() {
    const dispatch = useDispatch();
    const characters = useSelector((state) => state.characters);

    return (
        <>

            <div className={styles.containermenu}>
                <nav className={styles.menu}>
                    <ul className={styles.texto}>
                        <img
                            src="logo.png"
                            className={styles.logo} />

                        <Link to={"/"}>
                            <Buttons
                                infoboton={"HOME"}
                            />
                        </Link>

                        <Buttons
                            infoboton={"RANDOM CARD"}
                            funcion={() => {
                                dispatch(addCard(
                                    characters[Math.floor(Math.random() * characters.length)]
                                ))
                            }}
                        />

                        <Buttons
                            infoboton={"DELETE CARDS"}
                            funcion={() => {
                                dispatch(eliminarCard())
                            }}
                        />

                        <Link to={"/favorites"}>
                            <Buttons
                                infoboton={"FAVORITES"}
                            />
                        </Link>

                        <Link to={"/about"}>
                            <Buttons
                                infoboton={"ABOUT ME"}
                            />
                        </Link>
                        <SearchBar />
                    </ul>
                </nav>

            </div>
        </>
    )

}

export default MenuHome;