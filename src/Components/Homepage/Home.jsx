import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getApi } from "../../Redux/Actions";
import styles from "../Homepage/Home.module.css";
import Card from "../Card/Cards";

const Homepage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getApi('https://rickandmortyapi.com/api/character'));
    }, []);

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