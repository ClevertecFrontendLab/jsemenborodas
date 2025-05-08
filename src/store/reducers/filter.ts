import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SearchState } from './search';

export interface FilterState extends Partial<SearchState> {}

const initialState: FilterState = {
    allergens: [],
    meat: [],
    garnish: [],
    subcategoriesIds: [],
    authors: [],
    categories: [],
    allFilters: [],
    isEliminateAllergensActivated: false,
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setAllergens(state, { payload }: PayloadAction<string[]>) {
            state.allergens = payload;
        },

        setMeat(state, { payload }: PayloadAction<string[]>) {
            state.meat = payload;
        },
        setGarnish(state, { payload }: PayloadAction<string[]>) {
            state.garnish = payload;
        },
        setSubcategoriesIds(state, { payload }: PayloadAction<string[]>) {
            state.subcategoriesIds = payload;
        },
        setAuthors(state, { payload }: PayloadAction<string[]>) {
            state.authors = payload;
        },
        setCategories(state, { payload }: PayloadAction<string[]>) {
            state.categories = payload;
        },
        setAllFilters(state, { payload }: PayloadAction<string[]>) {
            state.allFilters = payload;
        },
        setIsEliminatAllergensActivated(state) {
            state.isEliminateAllergensActivated = !state.isEliminateAllergensActivated;
        },
        addAllergen(state, { payload }: PayloadAction<string>) {
            if (!state.allergens) {
                state.allergens = [];
            }
            state.allergens.push(payload);
        },
        addMeat(state, { payload }: PayloadAction<string>) {
            if (!state.meat) {
                state.meat = [];
            }
            state.meat.push(payload);
        },
        addGarnish(state, { payload }: PayloadAction<string>) {
            if (!state.garnish) {
                state.garnish = [];
            }
            state.garnish.push(payload);
        },
        addSubcategoryId(state, { payload }: PayloadAction<string>) {
            if (!state.subcategoriesIds) {
                state.subcategoriesIds = [];
            }
            state.subcategoriesIds.push(payload);
        },
        addAuthor(state, { payload }: PayloadAction<string>) {
            if (!state.authors) {
                state.authors = [];
            }
            state.authors.push(payload);
        },
        addCategory(state, { payload }: PayloadAction<string>) {
            if (!state.categories) {
                state.categories = [];
            }
            state.categories.push(payload);
        },
        addFilter(state, { payload }: PayloadAction<string>) {
            if (!state.allFilters) {
                state.allFilters = [];
            }
            state.allFilters.push(payload);
        },

        removeAllergen(state, { payload }: PayloadAction<string>) {
            if (state.allergens) {
                state.allergens = state.allergens.filter((item) => item !== payload);
            }
        },
        removeMeat(state, { payload }: PayloadAction<string>) {
            if (state.meat) {
                state.meat = state.meat.filter((item) => item !== payload);
            }
        },
        removeGarnish(state, { payload }: PayloadAction<string>) {
            if (state.garnish) {
                state.garnish = state.garnish.filter((item) => item !== payload);
            }
        },
        removeSubcategoryId(state, { payload }: PayloadAction<string>) {
            if (state.subcategoriesIds) {
                state.subcategoriesIds = state.subcategoriesIds.filter((item) => item !== payload);
            }
        },
        removeAuthors(state, { payload }: PayloadAction<string>) {
            if (state.authors) {
                state.authors = state.authors.filter((item) => item !== payload);
            }
        },
        removeCategory(state, { payload }: PayloadAction<string>) {
            if (state.categories) {
                state.categories = state.categories.filter((item) => item !== payload);
            }
        },
        removeFilter(state, { payload }: PayloadAction<string>) {
            if (state.allFilters) {
                state.allFilters = state.allFilters.filter((item) => item !== payload);
            }
        },
        resetSearchState(state) {
            Object.assign(state, initialState);
        },
    },
});

export const selectSearchState = (state: { filter: FilterState }) => state.filter;
export const selectAllergens = (state: { filter: FilterState }) => state.filter.allergens;
export const selectMeat = (state: { filter: FilterState }) => state.filter.meat;
export const selectGarnish = (state: { filter: FilterState }) => state.filter.garnish;
export const selectSubcategoriesIds = (state: { filter: FilterState }) =>
    state.filter.subcategoriesIds;

export const selectAuthors = (state: { filter: FilterState }) => state.filter.authors;
export const selectCategories = (state: { filter: FilterState }) => state.filter.categories;
export const selectAllFilters = (state: { filter: FilterState }) => state.filter.allFilters;
export const selectEliminateAllergens = (state: { filter: FilterState }) =>
    state.filter.isEliminateAllergensActivated;
export const {
    setAllFilters,
    setAllergens,
    setAuthors,
    setCategories,
    setGarnish,
    setIsEliminatAllergensActivated,
    setMeat,
    setSubcategoriesIds,
    addAllergen,
    addAuthor,
    addCategory,
    addFilter,
    addGarnish,
    addMeat,
    addSubcategoryId,
    removeAllergen,
    removeAuthors,
    removeCategory,
    removeFilter,
    removeGarnish,
    removeMeat,
    removeSubcategoryId,
    resetSearchState,
} = filterSlice.actions;

export default filterSlice.reducer;
