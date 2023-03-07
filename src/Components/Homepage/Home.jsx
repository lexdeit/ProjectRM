import { React, useEffect } from "react";
import styles from "../Homepage/Home.module.css";
import Card from "../Card/Cards";
import MenuHome from "../Menu/Menu";
import Loading from "../Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getApi } from "../../Redux/Actions";

function Homepage() {
    const cards = useSelector((state) => state.cards)


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
                    {
                        cards.length <= 1600 ? <Loading/> : <Card />
                    }
                </div>

            </div>

        </>
    )

}

export default Homepage;