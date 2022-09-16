import * as Actions from '../controllers/actionTypes'
const initialState = {
    lineOrder: [],
    num: 0,
}

const lineOrdersReducer = (state = initialState, action) => {
    switch(action.type){
        case Actions.ADD_NEW_DON_HANG:{
            const {cart} = action.data
            let copyPayload = [...state.lineOrder]
            copyPayload.push(cart)
            return {
                ...state,
                lineOrder: copyPayload
            }
        }
        case Actions.CHOOSE_ORDER:{
            return {
                ...state,
                num: action.payload
            }
        }
        default: return state
    }
}

export default lineOrdersReducer