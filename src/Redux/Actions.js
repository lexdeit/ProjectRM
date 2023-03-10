import React from "react";
import CardU from "../Components/Card/CardU";
import axios from "axios";
import { DELETE_ALL, SHOW_ABOUT_ME, ADD_CARD, GET_API, ELIMINAR_CARDS, ELIMINAR, FAVORITES_CARD } from "./Types";
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

export const addCard = ({ id, name, gender, origin, species, image }) => (dispatch) => {
    let nuevaCard =
        <CardU
            key={id}
            name={name}
            gender={gender}
            origin={origin.name}
            species={species}
            image={image}
            funcion={() => dispatch(eliminar(id))}
            like={() => dispatch(addFavorites({
                id: id,
                name: name,
                gender: gender,
                origin: origin.name,
                species: species,
                image: image
            }))}
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

export const buscarId = ({ id, name, gender, origin, species, image }) => (dispatch) => {
    let card =
        <CardU
            key={id}
            name={name}
            gender={gender}
            origin={origin.name}
            species={species}
            image={image}
            funcion={() => dispatch(eliminar(id))}
            like={() => dispatch(addFavorites({
                id: id,
                name: name,
                gender: gender,
                origin: origin.name,
                species: species,
                image: image
            }))}
        />;

    dispatch({
        type: ADD_CARD,
        payload: card
    });

}

export const addFavorites = ({ id, name, gender, origin, species, image }) => {
    let newFavorite = (<CardU
        key={id}
        name={name}
        gender={gender}
        origin={origin.name}
        species={species}
        image={image}
    />);
    return {
        type: FAVORITES_CARD,
        payload: newFavorite
    }
}

export const aboutMe = () => {
    return {
        type: SHOW_ABOUT_ME,
        payload: <About />
    }
}

export const home = () => {
    return {
        type: DELETE_ALL
    }
}