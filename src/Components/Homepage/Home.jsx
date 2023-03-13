import styles from "../Homepage/Home.module.css";
import Card from "../Card/Cards";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getApi } from "../../Redux/Actions";

const Homepage = () => {
    const dispatch = useDispatch();
    const characters = useSelector((state) => state.characters);

    useEffect(() => {
        if (characters.length === 0) {
            dispatch(getApi('https://rickandmortyapi.com/api/character'));
        }
    }, [])

    return (
        <>
            <iframe src="https://www.youtube.com/embed/CB7wInCJ-DI?&autoplay=1&loop=1&mute=1&showinfo=0&controls=0"></iframe>

            <div className={styles.centrado}>

                <Card />
                <div className={styles.background}>
                </div>

            </div>

        </>
    )

}

export default Homepage;