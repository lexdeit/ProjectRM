import { React, useEffect } from "react";
import styles from "../Homepage/Home.module.css";
import Card from "../Card/Cards";
import MenuHome from "../Menu/Menu";
import { useDispatch, useSelector } from "react-redux";
import { getApi } from "../../Redux/Actions";
import Mobilemenu from "../Menu/MobileMenu";

function Homepage() {
    const aboutMea = useSelector((state) => state.aboutMea);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getApi('https://rickandmortyapi.com/api/character'));
    }, []);

    return (
        <>
            <iframe src="https://www.youtube.com/embed/CB7wInCJ-DI?&autoplay=1&loop=1&mute=1&showinfo=0&controls=0"></iframe>
                <MenuHome />

                <div className={styles.centrado}>
                    {aboutMea}

                    <Card />
            <div className={styles.background}>
                </div>

            </div>
            <Mobilemenu></Mobilemenu>

        </>
    )

}

export default Homepage;