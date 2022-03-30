import { DB } from "../../db"
import { LOAD_BILL, LOAD_CARD } from "../types"


export const loadBill = () => {
    return async dispatch => {
        const data = await DB.getTransactions('bill')
        dispatch({
            type: LOAD_BILL,
            payload: data
        })
    }
}

export const loadCard = () => {
    return async dispatch => {
        const data = await DB.getTransactions('card')
        dispatch({
            type: LOAD_CARD,
            payload: data
        })
    }
}