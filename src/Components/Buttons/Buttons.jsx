import React from "react";
import styles from "./Buttons.module.css"

export default function Buttons({funcion, infoboton}) {


    return (
        <>
            <button
                className={styles.btn}
                onClick={funcion}>

                {infoboton}
            </button>

        </>
    )

}