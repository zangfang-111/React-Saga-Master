import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './Reducers'
import rootSaga from './Sagas'

// Create the saga middleware.
const sagaMiddleware = createSagaMiddleware()

// Mount it on the store.
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

// Then run the saga.
sagaMiddleware.run(rootSaga)

export default store
