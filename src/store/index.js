import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { operationsReducer } from './reducers/operationsReducer'

const rootReducer = combineReducers({
    operations: operationsReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))