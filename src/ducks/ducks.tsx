import { combineReducers } from '@reduxjs/toolkit';
import  combineSagas  from './ducksUtils';
import usersReducer, { sagas as usersSagas} from './users';
import postsReducer, { sagas as postsSagas} from './posts';
import commentsReducer, { sagas as commentsSagas} from './comments';



const rootReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer
})

export const rootSaga = combineSagas(
    usersSagas,
    postsSagas,
    commentsSagas
);

export type rootSagaType = ReturnType<typeof rootSaga>

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer