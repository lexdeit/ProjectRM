import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../../Components/SearchBar/Search.module.css";
import { buscarId } from "../../Redux/Actions";
import Buttons from "../Buttons/Buttons";

export default function SearchBar() {
    const [ida, setida] = useState('')
    const dispatch = useDispatch();


    const enviarID = (ida) => {
        console.log("Me ejecute!");
        dispatch(
            buscarId(ida)
        )
    }

    const capturar = (event) => {
        setida(event.target.value)
    }



    return (
        <>
            <div className={styles.div}>

                <input
                    placeholder="Introduce ID"
                    type="text"
                    className={styles.input}
                    required=""
                    onChange={capturar}
                />

            </div>
                <Buttons
                infoboton={"🔎"}
                funcion={() => {enviarID(ida)}}
                />
        </>
    )

}
