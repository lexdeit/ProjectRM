import React from "react";
import styles from "../Card/CardU.module.css";

export default function CardU(props) {
  return (
    <>
      <div className={styles.glowing}>
        <div className={styles.card}>
          <div className={styles.card2}>
            <button
              className={styles.btn}
              onClick={props.onClick}
            >
              ❌
            </button>
            <h2 className={styles.informacion}>{props.name}</h2>
            <img className={styles.imagen} src={props.image} alt={props.name} />
            <h3 className={styles.texto}>Species: {props.species}</h3>
            <h3 className={styles.texto}>Gender: {props.gender}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
