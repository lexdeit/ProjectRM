import React from "react";
import styles from "../Button/Button.module.css"

export default class Buttons extends React.Component {
    constructor(props){
        super(props)
        this.props = props;
        this.state = {

        }
    }


    respuestaURL = () => {
        let URL = "https://rickandmortyapi.com";
        let boton = document.getElementById("#Boton");
        boton.addEventListener('click', () => {
            window.open(URL, '_blank')
        })
    };

    render(){
        return (
            <>
            <div>
            <button id="Boton" className={styles.button} onClick={this.respuestaURL}>LinkedIn</button>  
            </div>
            </>
        )
    }

}