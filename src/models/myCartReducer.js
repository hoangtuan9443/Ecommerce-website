import * as Actions from '../controllers/actionTypes'
const initialStateCart = {
    num: 0,
    myCart: [],
    price: 0,
}

export default (state = initialStateCart, action) => {
    switch (action.type) {
        case Actions.ADD_NEW_INTO_CART:{
            const {payload} = action
            let copyPayload = [...state.myCart]
            copyPayload.unshift(payload)
            return {
                ...state,
                num: copyPayload.reduce((total, cur) => {return total + Number(cur.nums)}, 0),
                myCart: copyPayload,
                price: copyPayload.reduce((total, cur) => {return total + Number(cur.nums)*(Number(cur.price) + Number(cur.taxes))},0)
            }
        }
        case Actions.CREATE_NEW_DON_HANG:{
            return {
                ...state,
                num: 0,
                myCart: [],
                price: 0
            }
        }
        default: 
            return state
    }
}