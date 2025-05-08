import { createSlice } from '@reduxjs/toolkit';

export interface OpenState {
    isBurgerOpen?: boolean;
    isFilterOpen?: boolean;
}

const initialState: OpenState = {
    isBurgerOpen: false,
    isFilterOpen: false,
};

export const openSlice = createSlice({
    name: 'open',
    initialState,
    reducers: {
        setIsBurgerOpen(state) {
            state.isBurgerOpen = !state.isBurgerOpen;
        },
        setIsFilterOpen(state) {
            state.isFilterOpen = !state.isFilterOpen;
        },
        resetOpenState(state) {
            Object.assign(state, initialState);
        },
    },
});

export const selectorIsBurgerOpen = (state: { open: OpenState }) => state.open.isBurgerOpen;
export const selectorIsFilterOpen = (state: { open: OpenState }) => state.open.isFilterOpen;

export const { setIsBurgerOpen, setIsFilterOpen, resetOpenState } = openSlice.actions;
export default openSlice.reducer;
