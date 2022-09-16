import { combineReducers } from 'redux'
import ordersReducer from '../models/ordersReducer'
import myCartReducer from '../models/myCartReducer'
import productsReducer from '../models/productsReducer'
import lineOrdersReducer from '../models/lineOrdersReducer'
 
const reducer = combineReducers({
    ordersReducer,
    myCartReducer,
    productsReducer,
    lineOrdersReducer,
})


export default reducer