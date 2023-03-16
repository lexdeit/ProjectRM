import styles from '../Menu/MobileMenu.module.css';
import { addCard, eliminarCard } from '../../Redux/Actions';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Mobilemenu = () => {
    const dispatch = useDispatch();
    const characters = useSelector((state) => state.characters);


    return (
        <>
            <nav className={styles.menu}>
                <ul className={styles.mobilem}>

                    <Link to={"/"}>
                        <span className={styles.home}></span>
                    </Link>

                    <span className={styles.random} onClick={() => {
                        dispatch(
                            addCard(characters[Math.floor(Math.random() * characters.length)]))
                    }}></span>

                    <Link to={"favorites"}>
                        <span className={styles.favorite}></span>
                    </Link>

                    <span className={styles.basura} onClick={() => {
                        dispatch(eliminarCard())
                    }}></span>

                    <Link to={"about"}>
                        <span className={styles.about}></span>
                    </Link>

                </ul>
            </nav>
        </>
    )

}

export default Mobilemenu;