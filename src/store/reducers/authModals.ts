import { createSlice } from '@reduxjs/toolkit';

type authModalsState = {
    isAlertOpen?: boolean;
    isVerifyOpen?: boolean;
    isRegisterErrorOpen?: boolean;
};

const initialState: authModalsState = {
    isAlertOpen: false,
    isVerifyOpen: false,
    isRegisterErrorOpen: false,
};

export const authModalsSlice = createSlice({
    name: 'authModals',
    initialState,
    reducers: {
        toggleIsAlertOpen(state) {
            state.isAlertOpen = !state.isAlertOpen;
        },
        toggleIsVerifyOpen(state) {
            state.isVerifyOpen = !state.isVerifyOpen;
        },
        toggleIsRegisterErrorOpen(state) {
            state.isRegisterErrorOpen = !state.isRegisterErrorOpen;
        },
        resetAllAuthModals(state) {
            state.isAlertOpen = false;
            state.isVerifyOpen = false;
            state.isRegisterErrorOpen = false;
        },
    },
});

export const authModalIsAlertOpenSelect = (state: { authModals: authModalsState }) =>
    state.authModals.isAlertOpen;
export const authModalIsVerifyOpenSelect = (state: { authModals: authModalsState }) =>
    state.authModals.isVerifyOpen;
export const authModalsIsRegisterErrorOpen = (state: { authModals: authModalsState }) =>
    state.authModals.isRegisterErrorOpen;
export const {
    toggleIsAlertOpen,
    toggleIsVerifyOpen,
    toggleIsRegisterErrorOpen,
    resetAllAuthModals,
} = authModalsSlice.actions;

export default authModalsSlice.reducer;
