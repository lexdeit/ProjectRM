import React from "react";
import styles from "../About/About.module.css"

function About() {

    return (
        <>

            <div className={styles.card}>
                    <img className={styles.img} src="https://avatars.githubusercontent.com/u/115962817?v=4"/>
                <span>Hola soy Emmanuel Villavicencio</span>
                <p className={styles.info}>
                Estudiante de Ingenieria en Desarrollo en Software y Redes, tengo 22 años, y estudiante para especializarme en desarrollo Full Stack</p>
                <div className={styles.share}>
                    
                </div>
            </div>

        </>
    )
}

export default About;