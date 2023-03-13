import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { addCard, eliminarCard } from '../../Redux/Actions';
import styles from '../Menu/Menu.module.css';
import Buttons from '../Buttons/Buttons';
import SearchBar from '../SearchBar/Search';


const MenuHome = () => {
    const dispatch = useDispatch();
    const characters = useSelector((state) => state.characters);

    return (
        <>

            <div className={styles.containermenu}>
                <nav className={styles.menu}>
                    <ul className={styles.texto}>

                        <Link to={"/home"}>

                            <img
                                src="logo.png"
                                className={styles.logo} />
                        </Link>


                        <Link to={"/home"}>
                            <Buttons
                                infoboton={"HOME"}
                            />
                        </Link>

                        <Link to={"/home"}>
                            <Buttons
                                infoboton={"RANDOM CARD"}
                                funcion={() => {
                                    dispatch(addCard(
                                        characters[Math.floor(Math.random() * characters.length)]
                                    ))
                                }}
                            />
                        </Link>

                        <Link to={"/home"}>
                            <Buttons
                                infoboton={"DELETE CARDS"}
                                funcion={() => {
                                    dispatch(eliminarCard())
                                }}
                            />
                        </Link>
                        <Link to={"/favorites"}>
                            <Buttons
                                infoboton={"FAVORITES"}
                            />
                        </Link>

                        <Link to={"/about"}>
                            <Buttons
                                infoboton={"ABOUT ME"}
                            />
                        </Link>
                        <SearchBar />
                    </ul>
                </nav>

            </div>
        </>
    )

}

export default MenuHome;