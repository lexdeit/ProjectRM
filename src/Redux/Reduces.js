import { DELETE_ALL, ADD_CARD, GET_API, ELIMINAR_CARDS, ELIMINAR, BUSCAR_CARD, FAVORITES_CARD, DELETE_FAVORITES } from './Types';
const initialState = {
    characters: [],
    showCards: [],
    favorites: [],
}

function reducer(state = initialState, action) {
    switch (action.type) {

        case GET_API:
            return {
                ...state,
                characters: [...state.characters, ...action.payload]
            }

        case ADD_CARD:
            return {
                ...state,
                showCards: [action.payload, ...state.showCards]
            }

        case ELIMINAR_CARDS:
            return {
                ...state,
                showCards: []
            }

        case ELIMINAR:
            return {
                ...state,
                showCards: state.showCards.filter((card) =>
                    card.key !== `${action.payload}`)
            }

        case BUSCAR_CARD:
            return {
                ...state,
                showCards: state.characters.find((character) =>
                character.id === `${action.payload}`)
            }


        case FAVORITES_CARD:
            return {
                ...state,
                favorites: [action.payload, ...state.favorites]
            }


        case DELETE_ALL:
            return {
                ...state,
                showCards: [],
            } 
        case DELETE_FAVORITES:
            return {
                ...state,
                favorites: state.favorites.filter((card) =>
                card.key !== `${action.payload}`)
            }


        default: return state;

    }
}

export default reducer