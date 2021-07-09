import { configureStore, Action,  getDefaultMiddleware } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootReducer, { rootSaga, RootState } from './ducks'

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, ...getDefaultMiddleware()]
}
)

sagaMiddleware.run(rootSaga)


export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export default store