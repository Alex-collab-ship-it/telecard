import { LOAD_CARD, LOAD_BILL, LOAD_BALANCE, ADD_CARD } from "../types"

const initialState = {
    balance: {
        card: '0',
        bill: '0',
        loading: true
    },
    bill: {
        balance: '',
        transactions: [],
        loading: true
    },
    card: {
        balance: '',
        transactions: [],
        loading: true
    },
    loading: true,

}

export const operationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_BILL:
            return {...state,
                bill: {
                    ...action.payload,
                    loading: false
                },
                loading: true
            }
        case LOAD_CARD:
            return {...state,
                card: {
                    ...action.payload,
                    loading: false
                },
                loading: true
            }
        case ADD_CARD:
            return {...state,
                card: action.payload
            }
        case LOAD_BALANCE:
            return {...state,
                balance: action.payload,
                loading: false
            }
        default:
            return state
        
    }
}