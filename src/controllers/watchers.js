import { all } from 'redux-saga/effects'
import { watcherOrder } from './watcherOrder'
import { watcherProduct } from './watcherProduct'

export default function* rootSaga() {
    yield all([
        watcherOrder(),
        watcherProduct()
    ])
}