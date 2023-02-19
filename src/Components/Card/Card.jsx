import React from "react";
import styles from "../Card/Card.module.css"

export default class Card extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    cerrarventana = () => {
        return 1+1;
    };

    render(){
        return(
            <>
            <div className={styles.fuente}>
            <button onClick={this.cerrarventana} >X</button>
            <h2></h2>
            <h2></h2>
            <img  src={"asdjoaisdj"} alt="" />
            </div>
            </>
        )
    }
}