import { actions } from './actions';
import { v4 as uuidv4 } from 'uuid';

const localStorageCards = JSON.parse(localStorage.getItem('cards'));

const initialState = {
    cards: localStorageCards || [],
};

export function todoReducer(state = initialState, action) {
    switch (action.type) {
        case actions.ALL_CARDS:
            return {
                ...state,
            };

        case actions.ADD_CARD_DATA:
            const newCard = { cardId: uuidv4(), newTitle: action.payload.newTitle };
            const updatedCards = [...state.cards, newCard];
            localStorage.setItem('cards', JSON.stringify(updatedCards));
            return {
                ...state,
                cards: updatedCards,
            };

        case actions.EDIT_CARD_DATA:
            return {
                    ...state,
                    cards: state.cards.map((card) =>
                        card.cardId === action.payload.cardId
                            ? { ...card, newTitle: action.payload.newTitle }
                            : { cardId: action.payload.cardId, newTitle: action.payload.newTitle }
                    ),
                };

        default:
            return state;
    }
}
