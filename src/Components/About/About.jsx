import styles from "../About/About.module.css"

const About = () => {

    return (
        <>
            <iframe src="https://www.youtube.com/embed/5_Blq9W9cT8?&autoplay=1&loop=1&mute=1&showinfo=0&controls=0"></iframe>
            <div className={styles.content}>
                <div className={styles.card}>

                    <img className={styles.img}
                        src="Compressed.jpg" />

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
                        {/* <span className={styles.github} onClick={() => window.open('https://github.com/lexdeit')}></span> */}
                        <span className={styles.twitter} onClick={() => window.open('https://twitter.com/lex_teck')}></span>
                        {/* <span className={styles.linkedin} onClick={() => window.open('https://www.linkedin.com/in/lexdeit/')}></span> */}
                    </div>
                    {/* <div className={styles.corazon}>
                        <span className={styles.henry}></span>
                    </div> */}
                    <div className={styles.corazon}>
                        <h4 className={styles.made}>Made with </h4>
                        <span className={styles.love}></span>
                        <h4 className={styles.made}>in Mexico</h4>
                        <span className={styles.mexico}></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;