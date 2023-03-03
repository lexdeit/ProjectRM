import React from "react";
import styles from "../Homepage/Home.module.css"
import SearchBar from "../SearchBar/Search";
import Card from "../Card/Cards";
import MenuHome from "../Menu/Menu";

export default class Homepage extends React.Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {

        }
    }

    render() {
        return (
            <>
                <MenuHome />
                <div
                    className={styles.background}>

                    <div>
                        <SearchBar></SearchBar>
                        <Card />
                    </div>

                </div>

            </>
        )
    }
}