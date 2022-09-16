import * as Actions from '../controllers/actionTypes'

const initialState = {
    itemsOrder: [],
}

const ordersReducer = (state = initialState, action) => {
    switch(action.type){
        case Actions.CREATE_NEW_DON_HANG:{
            let {cart} = action.data
            let dataOrder = {
                id: state.itemsOrder.length + 1,
                name: 'Đơn hàng giày s' + Math.floor(Math.random()*100),
                sumPrice: cart.reduce((total, cur) => {return total + Number(cur.price)*Number(cur.nums)}, 0),
                sumTaxes: cart.reduce((total, cur) => {return total + Number(cur.taxes)*Number(cur.nums)}, 0)
            }
            let copyPayload = [...state.itemsOrder]
            copyPayload.push(dataOrder)
            return {
                itemsOrder: copyPayload,
            }
        }
        default: return state
    }
}

export default ordersReducer