import axios from "axios";
import React from "react";
import CardU from "../Components/Card/CardU";
import { RANDOM_CARD, GET_API, ELIMINAR_CARDS, ELIMINAR, BUSCAR_CARD, FAVORITES_CARD } from "./Types";


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
                    origin={character.origin.name}  
                    species={character.species}
                    image={character.image}
                    funcion={() => dispatch(eliminar(character.id))}
                    like={() => dispatch(addFavorites(character.id))}
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

export const buscarId = (id) => {
    return {
        type: BUSCAR_CARD,
        payload: id
    }
}

export const addFavorites = (id) => {
    return {
        type: FAVORITES_CARD,
        payload: id
    }
}