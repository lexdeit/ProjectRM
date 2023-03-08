import React from "react";
import styles from "../Card/CardU.module.css";
import Like from "../Like and Close/Like";


export default function CardU({name, image, species, gender, origin, funcion, like}) {


  return (
    <>

      <div className={styles.container}>

        <div className={styles.card2}>

          <button className={styles.btn} onClick={funcion}> <span className={styles.close}></span> </button>

          <div className={styles.btnlike}>
          <Like like={like}/>
          </div>

          <h2 className={styles.informacion}>{name}</h2>
          <img className={styles.imagen} src={image} alt={name} />
          <h3 className={styles.texto}>Species: {species}</h3>
          <h3 className={styles.texto}>Gender: {gender}</h3>
          <h3 className={styles.texto}>Origin: {origin}</h3>
        </div>
      </div>

    </>
  );
}
