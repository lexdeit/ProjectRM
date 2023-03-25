import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../Components/SearchBar/Search.module.css";
import { buscarId } from "../../Redux/Actions";

const SearchBar = () => {
    const characters = useSelector((state) => state.characters);
    const [id, setID] = useState('');
    const dispatch = useDispatch();


    const enviarID = (characters, id) => {
        dispatch(
            buscarId(
                characters.find(character => `${character.id}` === id ?
                    character
                    :
                    console.log("Buscando..."))
            )
        );

        setID("");
    };

    const capturar = (event) => {
        setID(event.target.value);
    };



    return (
        <>
            <div className={styles.div}>

                <input
                    placeholder="Introduce ID"
                    type="text"
                    className={styles.input}
                    required=""
                    onChange={capturar}
                    value={id}
                />

            </div>
            <span className={styles.lupa} onClick={() => enviarID(characters, id)}></span>
        </>
    );

};

export default SearchBar;