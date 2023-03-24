import styles from './Favorites.module.css';
import { useSelector } from 'react-redux';

const CardFavorites = () => {
    const favorites = useSelector((state) => state.favorites)


    return (
        <>
            <iframe src="https://www.youtube.com/embed/NvCBP2ja10I?&autoplay=1&loop=1&mute=1&showinfo=0&controls=0"></iframe>

            <div className={styles.tarjetas}>

                {favorites}
                <div className={styles.background}>
                </div>

            </div>

        </>
    )

}

export default CardFavorites;