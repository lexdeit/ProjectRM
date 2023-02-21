import React from "react";
import styles from "../Card/CardU.module.css";

export default function CardU(props) {

    const quitarTarjeta = () => {
        alert("Simulamos que se cierra")
    }

    return (
        <>
            <div className={styles.card}>
                <div className={styles.card2}>
                    <h2 className={styles.informacion}>Name: {props.name}</h2>
                    <h3 className={styles.texto}>Species: {props.species}</h3>
                    <h3 className={styles.texto}>Gender: {props.gender}</h3>
                    <img className={styles.imagen} src={props.image}/>
                </div>
            </div>
        </>
    )
}