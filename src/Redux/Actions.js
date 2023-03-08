import React from "react";
import CardU from "../Components/Card/CardU";
import axios from "axios";
import { DELETE_ABOUT_ME, SHOW_ABOUT_ME, ADD_CARD, GET_API, ELIMINAR_CARDS, ELIMINAR, FAVORITES_CARD } from "./Types";
import About from "../Components/About/About";


export const getApi = (url) => {
    return async (dispatch) => {
        const response = await axios.get(url);
        const nuevosCaracteres = response.data.results;

        dispatch({
            type: GET_API,
            payload: nuevosCaracteres
        });

        response.data.info.next ?
            getApi(response.data.info.next)(dispatch)
            : console.log("Se cargo toda la base de datos!");
    };
};

export const addCard = (character) => (dispatch) => {
    let nuevaCard =
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

    dispatch({
        type: ADD_CARD,
        payload: nuevaCard
    });
};



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

export const buscarId = (character) => (dispatch) => {
    let card =
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

    dispatch({
        type: ADD_CARD,
        payload: card
    });

}

export const addFavorites = (id) => {
    return {
        type: FAVORITES_CARD,
        payload: id
    }
}

export const aboutMe = () => {
    return {
        type: SHOW_ABOUT_ME,
        payload: <About/>
    }
}