import React from "react";
import styles from "../Homepage/Home.module.css"
import SearchBar from "../SearchBar/Search";
import Card from "../Card/Card";

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
                <div
                className={styles.background}>

                    <div>
                        <Card />
                    </div>
                    
                </div>

            </>
        )
    }
}