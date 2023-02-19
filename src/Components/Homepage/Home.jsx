import React from "react";
import styles from "../Homepage/Home.module.css"
import Button from "../Button/Button"
import SearchBar from "../SearchBar/Search";

export default class Homepage extends React.Component {
    constructor(props){
        super(props)
        this.props = props;
        this.state = {

        }
    }

    render (){
        return (
            <>
            <div className={styles.iniciodiv}>
            <Button/>
            <SearchBar/>
            </div>

            </>
        )
    }
}