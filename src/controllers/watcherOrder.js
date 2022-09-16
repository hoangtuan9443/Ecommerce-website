import { takeEvery, put } from 'redux-saga/effects'
import * as Actions from '../controllers/actionTypes'

export function* watcherOrder() {
    yield takeEvery(Actions.CREATE_NEW_DON_HANG, workerCreateNewDonHang)
}

function* workerCreateNewDonHang(action) {
    try{
        const {cart} = action.data
        // const dataLineOrder = yield select(state => state.lineOrdersReducer.lineOrder)
        // return dataLineOrder.unshift(cart)
        yield put({
            type: Actions.ADD_NEW_DON_HANG,
            data: {
                cart: cart
            }
        })
    } catch(err) {}
}