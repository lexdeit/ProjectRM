import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../Components/SearchBar/Search.module.css";
import { buscarId } from "../../Redux/Actions";

const SearchBar = () => {
    const characters = useSelector((state) => state.characters)
    const [ida, setida] = useState('')
    const dispatch = useDispatch();


    const enviarID = (characters, ida) => {
        dispatch(
            buscarId(
                characters.find(character => 
                    `${character.id}` === ida 
                    ? character 
                    : console.log("Buscando...") )
                    
            )
        )
    }

    const capturar = (event) => {
        setida(event.target.value)
    }



    return (
        <>
            <div className={styles.div}>

                <input
                    placeholder="Introduce ID"
                    type="text"
                    className={styles.input}
                    required=""
                    onChange={capturar}
                />

            </div>
            <span className={styles.lupa} onClick={() => enviarID(characters ,ida)}></span>
        </>
    )

}

export default SearchBar;