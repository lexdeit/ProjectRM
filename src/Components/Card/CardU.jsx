import React from "react";
import styles from "../Card/CardU.module.css";
import Like from "../Like and Close/Like";


export default function CardU(props) {


  return (
    <>

      <div className={styles.card}>

        <div className={styles.card2}>

          <button className={styles.btn} onClick={props.funcion}>❌</button>

          <div className={styles.btnlike}>
          <Like like={props.like}/>
          </div>

          <h2 className={styles.informacion}>{props.name}</h2>
          <img className={styles.imagen} src={props.image} alt={props.name} />
          <h3 className={styles.texto}>Species: {props.species}</h3>
          <h3 className={styles.texto}>Gender: {props.gender}</h3>
        </div>
      </div>

    </>
  );
}
