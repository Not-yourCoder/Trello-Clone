export const actions = {
    ALL_CARDS : "ALL_CARDS",
    ADD_CARD_DATA: "ADD_CARD_DATA",
    EDIT_CARD_DATA : "EDIT_CARD_TITLE",
}

export const getCardData = () => {
    return {
        type: actions.ALL_CARDS
    }
}

export const addCardData = (newTitle) => {
    return{
        type: actions.ADD_CARD_DATA,
        payload: { newTitle }
    }
}

export const editCardData = (cardId, newTitle) => {
    return {
      type: actions.EDIT_CARD_DATA,
      payload: { cardId, newTitle },
    };
};