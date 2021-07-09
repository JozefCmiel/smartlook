import { combineReducers } from '@reduxjs/toolkit';
import  combineSagas  from './ducksUtils';
import usersReducer, { sagas as postsSagas} from './users';

const rootReducer = combineReducers({
    users: usersReducer
})

export const rootSaga = combineSagas(
    postsSagas
);

export type rootSagaType = ReturnType<typeof rootSaga>

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer