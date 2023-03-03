import React from "react";
import styles from "../../Components/SearchBar/Search.module.css";

export default function SearchBar(props) {



    return (
        <>
            <div className={styles.div}>

                <input placeholder="Introduce ID" type="text" className={styles.input} required=""/>
            </div>
        </>
    )

}
