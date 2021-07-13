/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { takeLatest, call, put,  } from 'redux-saga/effects';
import axios from 'axios';

import { transformIntoNormalizedVersion } from '~frontendDucks/ducksUtils';

import { Comments, getComments } from './commentsInterfaces';


const initialState: Comments = {
    comments: {
        ids: [],
        byId: {}
    },
    loading: false,
    error: null,
};

const comments = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        getCommentsRequest(state, action:  PayloadAction<getComments>) {
            state.loading = !!action.payload; //just so the action is used
            state.error = null;
        },
        getCommentsSuccess(state, action:  PayloadAction<any>) {
            state.loading = false;
            state.error = null;
            state.comments = transformIntoNormalizedVersion(action.payload);
        },
        getCommentsError(state, action:  PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    }
});

export const {
    getCommentsRequest,
    getCommentsSuccess,
    getCommentsError,
} = comments.actions;
export default comments.reducer;

// API endpoints
const callGetComments = async (id: number) =>
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

// side effects
const workerGetComments = function* (action: PayloadAction<getComments>) {
    try {
        const { data } = yield call(callGetComments, action.payload.id);
        yield put(getCommentsSuccess(data));
    } catch (error) {
        yield put(getCommentsError(error));
    }
};

export const sagas = [
    takeLatest(getCommentsRequest, workerGetComments)
];
