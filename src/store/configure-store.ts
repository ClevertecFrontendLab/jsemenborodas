import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { apiSlice } from '~/query/create-api';

import appReducer, { appSlice } from './app-slice';
import filterReducer, { filterSlice } from './reducers/filter';
import openReducer, { openSlice } from './reducers/open';
import searchReducer, { searchSlice } from './reducers/search';
import userReducer, { userSlice } from './reducers/user';
const isProduction = false;
const rootReducer = combineReducers({
    [appSlice.name]: appReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [searchSlice.name]: searchReducer,
    [openSlice.name]: openReducer,
    [filterSlice.name]: filterReducer,
    [userSlice.name]: userReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: !isProduction,
});
