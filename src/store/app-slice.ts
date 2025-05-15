import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ApplicationState } from './configure-store';
export type AppState = typeof initialState;

const initialState = {
    isLoading: true,
    error: '' as string | null,
    success: '' as string | null,
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
    },
});
export const userLoadingSelector = (state: ApplicationState) => state.app.isLoading;
export const userErrorSelector = (state: ApplicationState) => state.app.error;
export const userSuccessSelector = (state: ApplicationState) => state.app.success;

export const { setAppError, setAppLoader, setAppSuccess } = appSlice.actions;
export default appSlice.reducer;
