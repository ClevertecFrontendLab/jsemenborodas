import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FetchConsts } from '~/components/consts/FetchConsts';

export interface SearchState {
    page?: number;
    limit?: number;
    allergens?: string[];
    searchString?: string;
    meat?: string[];
    garnish?: string[];
    subcategoriesIds?: string[];
    sortBy?: string;
    sortOrder?: string;
    isSearchStarted?: boolean;
    isSearchSuccessful?: boolean;
    isLoading?: boolean;
    isError?: boolean;
    authors?: string[];
    categories?: string[];
    isEliminateAllergensActivated?: boolean;
    allFilters?: string[];
}

const initialState: SearchState = {
    page: 1,
    limit: FetchConsts.CARDSLIMIT,
    allergens: [],
    searchString: '',
    meat: [],
    garnish: [],
    subcategoriesIds: [],
    sortBy: '',
    sortOrder: '',
    isSearchStarted: false,
    isSearchSuccessful: true,
    isLoading: false,
    isError: false,
    authors: [],
    categories: [],
    isEliminateAllergensActivated: false,
    allFilters: [],
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setPage(state, { payload }: PayloadAction<number>) {
            state.page = payload;
        },
        setLimit(state, { payload }: PayloadAction<number>) {
            state.limit = payload;
        },
        setAllergens(state, { payload }: PayloadAction<string[]>) {
            state.allergens = payload;
        },
        setSearchString(state, { payload }: PayloadAction<string>) {
            state.searchString = payload;
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
        setSortBy(state, { payload }: PayloadAction<string>) {
            state.sortBy = payload;
        },
        setSortOrder(state, { payload }: PayloadAction<string>) {
            state.sortOrder = payload;
        },

        setIsSearchStarted(state, { payload }: PayloadAction<boolean>) {
            state.isSearchStarted = payload;
        },

        setIsSearchSuccessful(state, { payload }: PayloadAction<boolean>) {
            state.isSearchSuccessful = payload;
        },
        setIsLoading(state, { payload }: PayloadAction<boolean>) {
            state.isLoading = payload;
        },
        setIsError(state, { payload }: PayloadAction<boolean>) {
            state.isError = payload;
        },
        setIsEliminatAllergensActivated(state) {
            state.isEliminateAllergensActivated = !state.isEliminateAllergensActivated;
        },
        setCategories(state, { payload }: PayloadAction<string[]>) {
            state.categories = payload;
        },
        setAllFilters(state, { payload }: PayloadAction<string[]>) {
            state.allFilters = payload;
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

export const selectSearchState = (state: { search: SearchState }) => state.search;
export const selectPage = (state: { search: SearchState }) => state.search.page;
export const selectLimit = (state: { search: SearchState }) => state.search.limit;
export const selectAllergens = (state: { search: SearchState }) => state.search.allergens;
export const selectSearchString = (state: { search: SearchState }) => state.search.searchString;
export const selectMeat = (state: { search: SearchState }) => state.search.meat;
export const selectGarnish = (state: { search: SearchState }) => state.search.garnish;
export const selectSubcategoriesIds = (state: { search: SearchState }) =>
    state.search.subcategoriesIds;
export const selectSortBy = (state: { search: SearchState }) => state.search.sortBy;
export const selectSortOrder = (state: { search: SearchState }) => state.search.sortOrder;
export const selectIsSearchStarted = (state: { search: SearchState }) =>
    state.search.isSearchStarted;
export const selectIsSearchSuccessful = (state: { search: SearchState }) =>
    state.search.isSearchSuccessful;
export const selectIsLoading = (state: { search: SearchState }) => state.search.isLoading;
export const selectIsError = (state: { search: SearchState }) => state.search.isError;
export const selectAuthors = (state: { search: SearchState }) => state.search.authors;
export const selectCategories = (state: { search: SearchState }) => state.search.categories;
export const selectAllFilters = (state: { search: SearchState }) => state.search.allFilters;
export const selectEliminateAllergens = (state: { search: SearchState }) =>
    state.search.isEliminateAllergensActivated;
export const {
    setPage,
    setLimit,
    setAllergens,
    setSearchString,
    setMeat,
    setGarnish,
    setSubcategoriesIds,
    setSortBy,
    setSortOrder,
    setIsSearchStarted,
    setIsSearchSuccessful,
    setIsLoading,
    setIsError,
    addAllergen,
    addMeat,
    addGarnish,
    addSubcategoryId,
    removeAllergen,
    removeMeat,
    removeGarnish,
    removeSubcategoryId,
    resetSearchState,
    setAuthors,
    addAuthor,
    removeAuthors,
    setCategories,
    addCategory,
    removeCategory,
    setIsEliminatAllergensActivated,
    addFilter,
    removeFilter,
    setAllFilters,
} = searchSlice.actions;

export default searchSlice.reducer;
