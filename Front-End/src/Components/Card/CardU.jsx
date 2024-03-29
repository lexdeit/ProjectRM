import styles from "../Card/CardU.module.css";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";


const CardU = ({ id, name, image, species, gender, origin, funcion, like }) => {


  return (
    <>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{cursor: 'move'}}
        drag
        dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }}
        dragElastic={0.5}
        className={styles.container}>

        <div className={styles.card2}>

          {
            funcion &&
            <button className={styles.btn} onClick={funcion}> <span className={styles.close}></span> </button>
          }

          {
            like &&
            <div className={styles.btnlike} onClick={like}>
              <label className={styles.containerlike}>
                <input checked={styles.checked} type="checkbox" onClick={(event) => { event.stopPropagation(); }} />
                <div className={styles.checkmark}>
                  <svg viewBox="0 0 256 256">
                    <path d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                      strokeWidth="20px"
                      stroke="#FFF"
                      fill="none"></path>
                  </svg>
                </div>
              </label>
            </div>
          }

          <Link to={`/detail/${id}`}>
            <h2 className={styles.informacion}>{name}</h2>
          </Link>

          {/* <img className={styles.imagen} src={image} alt={name} /> */}
          <motion.img
            initial={{ scale: 0, pointerEvents: 'none'}}
            animate={{ scale: 1}}
            transition={{ duration: 0.5 }}
            priority
            className={styles.imagen} src={image} alt={name} />

          <h3 className={styles.texto}>Species: {species}</h3>

          <h3 className={styles.texto}>Gender: {gender}</h3>

          <h3 className={styles.texto}>Origin: {origin}</h3>

        </div>
      </motion.div>
    </>
  );
}


export default CardU;