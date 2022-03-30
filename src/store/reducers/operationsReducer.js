import { LOAD_CARD, LOAD_BILL } from "../types"

const initialState = {
    bill: {
        transactions: [],
    },
    card: {
        transactions: []
    }

}

export const operationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_BILL:
            return {...state,
                bill: action.payload
            }
        case LOAD_CARD:
            return {...state,
                card: action.payload
            }
        
    }
    return state
}