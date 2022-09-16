import { takeEvery, put } from 'redux-saga/effects'
import * as Actions from '../controllers/actionTypes'

export function* watcherProduct() {
    yield takeEvery(Actions.CREATE_NEW_SAN_PHAM, workerCreateNewSanPham)
}

function* workerCreateNewSanPham(action) {
    try{
        const {data} = action.payload
        // const product = yield select(state => state.productsReducer.products)
        // product.unshift(data)
        yield put({
            type: Actions.ADD_NEW_SAN_PHAM,
            data: {
                products: data
            }
        })
    } catch(err) {}
}