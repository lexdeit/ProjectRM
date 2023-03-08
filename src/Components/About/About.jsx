import React from "react";
import styles from "../About/About.module.css"

function About() {

    return (
        <>

            <div className={styles.card}>

                <img className={styles.img}
                    src="https://avatars.githubusercontent.com/u/115962817?v=4" />

                <div className={styles.codeloader}>
                    <span>{`{`}</span>
                    Emmanuel Villavicencio
                    <span>{`}`}</span>
                </div>

                <h3 className={styles.carrera}>
                    Estudiante de Ingenieria en Desarrollo de Software y Redes
                </h3>

                <p className={styles.info}>
                    Especializandome en desarrollo Full Stack, en un futuro me gustaria trabajar en el sector de desarrollo
                    e investigacion de Inteligencia Artificial,
                    mis hobbies son la fotografia, videojuegos y programar.
                </p>

                <div className={styles.share}>
                    <span className={styles.instagram} onClick={() => window.open('https://www.instagram.com/lexteckg/')} ></span>
                    {/* <span className={styles.linkedin} onClick={() => window.open('https://www.linkedin.com/in/lexdeit/')}></span> */}
                    <span className={styles.github} onClick={() => window.open('https://github.com/lexdeit')}></span>
                </div>

                <div className={styles.corazon}>
                    <h4 className={styles.made}>Made with love</h4>
                    <span className={styles.love}></span>
                </div>
            </div>

        </>
    )
}

export default About;