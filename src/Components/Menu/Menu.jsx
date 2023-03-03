import React from 'react';
import Buttons from '../Buttons/Buttons';
import styles from '../Menu/Menu.module.css'
import SearchBar from '../SearchBar/Search';

function MenuHome() {


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
                        />

                        <Buttons
                            infoboton={"Random"}
                        />

                        <Buttons
                            infoboton={"Eliminar Tarjetas"}
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