import { DB } from "../../db"
import { toRoubles } from "../../config"
import { ADD_CARD, LOAD_BALANCE, LOAD_BILL, LOAD_CARD } from "../types"


export const load = (table) => async dispatch => {
    const data = await DB.getTransactions(table)
    dispatch({
        type: table === 'bill' ? LOAD_BILL : LOAD_CARD,
        payload: data
    })
}


export const loadBalance = () => async dispatch => {
    const card = await DB.loadBalance('card')
    const bill = await DB.loadBalance('bill') 
    dispatch({
        type: LOAD_BALANCE,
        payload: {
            card: toRoubles(card).replace(' ₽', ''),
            bill: toRoubles(bill).replace(' ₽', '')
        }
    })
}

export const toBill = (data) => async dispatch => {
    const result = await DB.addBill(data)

    dispatch({
        type: ADD_CARD,
        payload: result
    })
}

export const toCard = (data) => async dispatch => {
    const result = await DB.addCard(data)

    dispatch({
        type: ADD_CARD,
        payload: result
    })
}

