import axios from "axios";
import React from "react";
import CardU from "../Components/Card/CardU";
import { RANDOM_CARD, GET_API, ELIMINAR_CARDS, ELIMINAR } from "./Types";


export const getApi = (url) => {
    return async (dispatch) => {
            const response = await axios.get(url);
            const nuevosCaracteres = response.data.results;
            
            dispatch({
                type: GET_API,
                payload: nuevosCaracteres.map((character) => (
                    <CardU
                        key={character.id} 
                        name={character.name}
                        gender={character.gender}
                        species={character.species}
                        image={character.image}
                        onClick={() => dispatch(eliminar(character.id))}
                    />
                ))
            });

            response.data.info.next ?
                getApi(response.data.info.next)(dispatch)
                : console.log("Se cargo toda la base de datos!");
    };
};

export const randomCardR = (randomCard) => {
    return {
        type: RANDOM_CARD,
        payload: randomCard
    }
}


export const eliminarCard = () => {
    return {
        type: ELIMINAR_CARDS
    }
}

export const eliminar = (id) => {
    return {
        type: ELIMINAR,
        payload: id
    }
}