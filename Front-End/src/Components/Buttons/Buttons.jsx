import styles from "./Buttons.module.css";

const Buttons = ({ funcion, infoboton }) => {


    return (
        <>
            <button className={styles.btn} onClick={funcion}> {infoboton} </button>
        </>
    )

}

export default Buttons;