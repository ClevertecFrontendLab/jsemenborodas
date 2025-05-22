import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ApplicationState } from './configure-store';
export type AppState = typeof initialState;

const initialState = {
    isLoading: true,
    error: '' as string | null,
    success: '' as string | null,
    isAuth: false,
};
export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAppError(state, { payload: error }: PayloadAction<string | null>) {
            state.error = error;
        },
        setAppLoader(state, { payload: isLoading }: PayloadAction<boolean>) {
            state.isLoading = isLoading;
        },
        setAppSuccess(state, { payload: success }: PayloadAction<string | null>) {
            state.success = success;
        },
        setIsAuth(state, { payload: isAuth }: PayloadAction<boolean>) {
            state.isAuth = isAuth;
        },
    },
});
export const userLoadingSelector = (state: ApplicationState) => state.app.isLoading;
export const userErrorSelector = (state: ApplicationState) => state.app.error;
export const userSuccessSelector = (state: ApplicationState) => state.app.success;
export const userAuthSelector = (state: ApplicationState) => state.app.isAuth;

export const { setAppError, setAppLoader, setAppSuccess, setIsAuth } = appSlice.actions;
export default appSlice.reducer;
