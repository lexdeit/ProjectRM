import { React, useEffect } from "react";
import styles from "../Homepage/Home.module.css";
import Card from "../Card/Cards";
import MenuHome from "../Menu/Menu";
import { useDispatch, useSelector } from "react-redux";
import { getApi } from "../../Redux/Actions";

function Homepage() {
    const aboutMea = useSelector((state) => state.aboutMea);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getApi('https://rickandmortyapi.com/api/character'));
    }, []);

    return (
        <>
                <iframe src="https://www.youtube.com/embed/jVT3vHNhS4o?&autoplay=1&loop=1&mute=1&showinfo=0&controls=0"></iframe>
            <div className={styles.background}>

                <MenuHome />

                <div className={styles.centrado}>
                    {aboutMea}
                    <Card />
                </div>

            </div>

        </>
    )

}

export default Homepage;