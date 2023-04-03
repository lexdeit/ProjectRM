import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import styles from './CardDetails.module.css';

const CardDetails = () => {
    const { id } = useParams();
    const characters = useSelector((state) => state.characters);
    const { name, image, species, gender, origin, status, type } =
        characters.find((character) => `${character.id}` === `${id}`);

    return (
        <>

            <iframe src="https://www.youtube.com/embed/6vAxc0Av_UI?&autoplay=1&loop=1&mute=1&showinfo=0&controls=0" />
            <div className={styles.content}>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className={styles.container}>

                    <div>
                        <img className={styles.imagen} src={image} alt={name} />
                    </div>

                    <div>
                        <h2 className={styles.informacion}>{name}</h2>
                        <h3 className={styles.texto}>Species: {species}</h3>
                        <h3 className={styles.texto}>Gender: {gender}</h3>
                        <h3 className={styles.texto}>Origin: {origin.name}</h3>
                        <h3 className={styles.texto}>Status: {status}</h3>
                        <h3 className={styles.texto}>Type: {type}</h3>
                    </div>
                </motion.div>
            </div>
        </>
    )

}

export default CardDetails;