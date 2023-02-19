import React from "react";
import styles from "../../Components/SearchBar/Search.module.css";

export default class SearchBar extends React.Component {
    constructor(props){
        this.props = props;
        this.state = {

        }
    }
    render(){
        return (
        <div>
          <input type='search' />
          <button className={styles.search}>Agregar</button>
        </div>
        )
    }
 }
 