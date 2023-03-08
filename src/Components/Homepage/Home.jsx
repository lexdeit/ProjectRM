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