import { React, useEffect } from "react";
import styles from "../Homepage/Home.module.css";
import Card from "../Card/Cards";
import MenuHome from "../Menu/Menu";
import { useDispatch } from "react-redux";
import { getApi } from "../../Redux/Actions";

function Homepage() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getApi('https://rickandmortyapi.com/api/character'));
    }, []);

    return (
        <>

            <div
                className={styles.background}>
                <MenuHome />
                <div>
                    <Card />
                </div>

            </div>

        </>
    )

}

export default Homepage;