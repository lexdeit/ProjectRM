import React from "react";
import styles from "./Buttons.module.css"

export default function Buttons(props) {


    return (
        <>
            <button
                className={styles.btn}
                onClick={props.funcion}>

                {props.infoboton}
            </button>

        </>
    )

}