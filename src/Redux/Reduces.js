import { ADD_CARD, GET_API, ELIMINAR_CARDS, ELIMINAR, BUSCAR_CARD, FAVORITES_CARD } from './Types';
const initialState = {
    characters: [],
    cards: [],
    showCards: [],
    favorites: []
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
                showCards: [...state.showCards, action.payload]
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
                showCards: state.characters.filter((character) =>
                character.id === `${action.payload}`)
            }


        case FAVORITES_CARD:
            return {
                ...state,
                favorites: [...state.favorites]
            }



        default: return state;

    }
}

export default reducer