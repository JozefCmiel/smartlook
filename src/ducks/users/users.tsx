/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { takeLatest, call, put,  } from 'redux-saga/effects';
import { Users } from './usersInterfaces';
import axios from 'axios';
import { transformIntoNormalizedVersion } from '~frontendDucks/ducksUtils';
import { AppThunk } from '~frontendDucks/store';




const initialState: Users = {
  users: {
      ids: [],
      byId: {}
  },
  loading: false,
  error: null,
  selectedUser: '',
}

const users = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsersRequest(state) {
      console.log('setting')
      state.loading = true
      state.error = null
    },
    getUsersSuccess(state, action:  PayloadAction<any>) {
        state.loading = false;
        state.error = null;
        state.users = transformIntoNormalizedVersion(action.payload)
    },
    getUsersError(state, action:  PayloadAction<string>) {
        state.loading = false;
        state.error = action.payload;
    },
    setSelectedUser(state, action:  PayloadAction<string>) {
      state.selectedUser = action.payload;
  },
  }
})

export const {
  getUsersRequest,
  getUsersSuccess,
  getUsersError,
  setSelectedUser
} = users.actions
export default users.reducer

// API endpoints
const callGetUsers = async () =>
   axios.get('https://jsonplaceholder.typicode.com/users');


// side effects
const workerGetUsers = function* () {
    try {
        const { data } = yield call(callGetUsers);
        yield put(getUsersSuccess(data));
    } catch (error) {
        yield put(getUsersError(error));
    }
};

export const sagas = [
   takeLatest(getUsersRequest, workerGetUsers)
];
