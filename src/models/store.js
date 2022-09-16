import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleWare from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from '../controllers/reducers'
import rootWatcher from '../controllers/watchers'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['myCartReducer']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const saga = createSagaMiddleWare()
const middleWears = [saga]
const store = createStore(persistedReducer, applyMiddleware(...middleWears))
const persistor = persistStore(store)

saga.run(rootWatcher)

export {store, persistor}