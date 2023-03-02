import { RANDOM_CARD, GET_API, ELIMINAR_CARD } from './Types';
const initialState = {
    characters: [],
    cards: [],
    showCards: []
}

function reducer(state = initialState, action) {
    switch (action.type) {

        case GET_API:
            return {
                ...state,
                cards: [...state.cards, ...action.payload]
            }

        case RANDOM_CARD:
            return {
                ...state,
                showCards: [...state.showCards, state.cards[Math.floor(Math.random() * state.cards.length)]]
            }

        case ELIMINAR_CARD:
            return {
                ...state,
                showCards: []
            }

        default: return state;

    }
}

export default reducer