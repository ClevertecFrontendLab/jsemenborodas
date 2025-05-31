import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type authModalsState = {
    isAlertOpen?: boolean;
    isVerifyOpen?: boolean;
    isRegisterErrorOpen?: boolean;
    isResetPasswordOpen?: boolean;
    isUploadImageOpen?: boolean;
    isStepUploadImageOpen?: boolean;
    isCloseAndSaveTemplateOpen?: boolean;
    isCloseAndSaveTemplateData?: string;
};

const initialState: authModalsState = {
    isAlertOpen: false,
    isVerifyOpen: false,
    isRegisterErrorOpen: false,
    isResetPasswordOpen: false,
    isUploadImageOpen: false,
    isStepUploadImageOpen: false,
    isCloseAndSaveTemplateOpen: false,
    isCloseAndSaveTemplateData: 'string',
};

export const authModalsSlice = createSlice({
    name: 'authModals',
    initialState,
    reducers: {
        setIsCloseAndSaveTemplateData(state, { payload }: PayloadAction<string>) {
            state.isCloseAndSaveTemplateData = payload;
        },
        toggleIsAlertOpen(state) {
            state.isAlertOpen = !state.isAlertOpen;
        },
        toggleIsUploadImageOpen(state) {
            state.isUploadImageOpen = !state.isUploadImageOpen;
        },
        toggleIsStepUploadImageOpen(state) {
            state.isStepUploadImageOpen = !state.isStepUploadImageOpen;
        },
        toggleIsVerifyOpen(state) {
            state.isVerifyOpen = !state.isVerifyOpen;
        },
        toggleIsCloseAndSaveTemplateOpen(state) {
            state.isCloseAndSaveTemplateOpen = !state.isCloseAndSaveTemplateOpen;
        },
        toggleIsRegisterErrorOpen(state) {
            state.isRegisterErrorOpen = !state.isRegisterErrorOpen;
        },
        toggleIsResetPasswordOpen(state) {
            state.isResetPasswordOpen = !state.isResetPasswordOpen;
        },
        closeResetPasswordOpen(state) {
            state.isResetPasswordOpen = false;
        },
        setIsAlertOpen(state, { payload }: PayloadAction<boolean>) {
            state.isAlertOpen = payload;
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
export const authModaisIsResetPasswordOpenSelect = (state: { authModals: authModalsState }) =>
    state.authModals.isResetPasswordOpen;
export const isUploadImageModalOpenSelect = (state: { authModals: authModalsState }) =>
    state.authModals.isUploadImageOpen;
export const isStepUploadImageModalOpenSelect = (state: { authModals: authModalsState }) =>
    state.authModals.isStepUploadImageOpen;
export const isCloseAndSaveTemplateModalOpenSelect = (state: { authModals: authModalsState }) =>
    state.authModals.isCloseAndSaveTemplateOpen;
export const CloseAndSaveTemplateModalDataSelect = (state: { authModals: authModalsState }) =>
    state.authModals.isCloseAndSaveTemplateData;
export const {
    toggleIsAlertOpen,
    toggleIsVerifyOpen,
    toggleIsRegisterErrorOpen,
    resetAllAuthModals,
    toggleIsResetPasswordOpen,
    setIsAlertOpen,
    closeResetPasswordOpen,
    toggleIsUploadImageOpen,
    toggleIsStepUploadImageOpen,
    toggleIsCloseAndSaveTemplateOpen,
    setIsCloseAndSaveTemplateData,
} = authModalsSlice.actions;

export default authModalsSlice.reducer;
