import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserState = {
    firstName: string;
    lastName: string;
    email: string;
    login: string;
    password: string;
    repeatPassword: string;
    progress: {
        isFirstNameValid: boolean;
        isLastNameValid: boolean;
        isEmailValid: boolean;
        isLoginValid: boolean;
        isPasswordValid: boolean;
        isRepeatValid: boolean;
    };
};

const initialState: UserState = {
    firstName: '',
    lastName: '',
    email: '',
    login: '',
    password: '',
    repeatPassword: '',
    progress: {
        isFirstNameValid: false,
        isLastNameValid: false,
        isEmailValid: false,
        isLoginValid: false,
        isPasswordValid: false,
        isRepeatValid: false,
    },
};
const firstLetterRegExp = new RegExp('^[А-Я]');
const allRegExp = new RegExp('^[А-Яа-я-ё]{1,}$');
const emailRegExp = new RegExp(
    '^[A-Za-z0-9._%+-]{1,}(?<!\\.)@([A-Za-z0-9-]{1,})(\\.[A-Za-z]{2,})+$',
);
const loginRegExp = new RegExp('^[A-Za-z0-9!@#$&_+-.]{5,50}$');
const passwordRegExp = new RegExp('^[A-Za-z0-9!@#$&_+-.]{8,50}$');
const firstLetterUpperCaseRegExp = new RegExp('^[A-Z]{1,}');
const hasNumberRegExp = new RegExp('[0-9]');
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setFirstName(state, { payload }: PayloadAction<string>) {
            state.firstName = payload;
            const isFirstLetterValid = firstLetterRegExp.test(payload);
            const isAllLettersValid = allRegExp.test(payload);
            state.progress.isFirstNameValid = isFirstLetterValid && isAllLettersValid;
        },
        setLastName(state, { payload }: PayloadAction<string>) {
            state.lastName = payload;
            const isFirstLetterValid = firstLetterRegExp.test(payload);
            const isAllLettersValid = allRegExp.test(payload);
            state.progress.isLastNameValid = isFirstLetterValid && isAllLettersValid;
        },
        setEmail(state, { payload }: PayloadAction<string>) {
            state.email = payload;
            const isEmailValid = emailRegExp.test(payload);
            state.progress.isEmailValid = isEmailValid;
        },
        setLogin(state, { payload }: PayloadAction<string>) {
            state.login = payload;
            const isAllLettersValid = loginRegExp.test(payload);
            state.progress.isLoginValid = isAllLettersValid;
        },
        setPassword(state, { payload }: PayloadAction<string>) {
            state.password = payload;
            const isAllLettersValid = passwordRegExp.test(payload);
            const isUpperCase = firstLetterUpperCaseRegExp.test(payload);
            const isNumber = hasNumberRegExp.test(payload);
            state.progress.isPasswordValid = isAllLettersValid && isUpperCase && isNumber;
        },
        setRepeatPassword(state, { payload }: PayloadAction<string>) {
            state.repeatPassword = payload;
            state.progress.isRepeatValid = state.repeatPassword === state.password;
        },
        setIsFirstNameValid(state, { payload }: PayloadAction<boolean>) {
            state.progress.isFirstNameValid = payload;
        },
        setIsSubNameValid(state, { payload }: PayloadAction<boolean>) {
            state.progress.isLastNameValid = payload;
        },
        setIsEmailValid(state, { payload }: PayloadAction<boolean>) {
            state.progress.isEmailValid = payload;
        },
        resetAllUserState(state) {
            state.email = '';
            state.firstName = '';
            state.lastName = '';
            state.login = '';
            state.password = '';
            state.repeatPassword = '';
            state.progress.isEmailValid = false;
            state.progress.isFirstNameValid = false;
            state.progress.isLastNameValid = false;
            state.progress.isLoginValid = false;
            state.progress.isPasswordValid = false;
            state.progress.isRepeatValid = false;
        },
    },
});

export const userFirstNameSelect = (state: { user: UserState }) => state.user.firstName;
export const userLastNameSelect = (state: { user: UserState }) => state.user.lastName;
export const userEmailSelect = (state: { user: UserState }) => state.user.email;
export const userLoginSelect = (state: { user: UserState }) => state.user.login;
export const userPasswordSelect = (state: { user: UserState }) => state.user.password;
export const userRepeatPasswordSelect = (state: { user: UserState }) => state.user.repeatPassword;
export const progressSelect = (state: { user: UserState }) => state.user.progress;
export const isFirstNameValidSelect = (state: { user: UserState }) =>
    state.user.progress.isFirstNameValid;
export const isSubNameValidSelect = (state: { user: UserState }) =>
    state.user.progress.isLastNameValid;
export const isEmailValidSelect = (state: { user: UserState }) => state.user.progress.isEmailValid;
export const {
    setEmail,
    setFirstName,
    setLastName,
    setLogin,
    setPassword,
    setRepeatPassword,
    resetAllUserState,
    setIsFirstNameValid,
    setIsEmailValid,
    setIsSubNameValid,
} = userSlice.actions;

export default userSlice.reducer;
