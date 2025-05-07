import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FilterState {
    pageOnFilter?: number;
    limitOnFilter?: number;
    allergensOnFilter?: string[];
    searchStringOnFilter?: string;
    meatOnFilter?: string[];
    garnishOnFilter?: string[];
    subcategoriesIdsOnFilter?: string[];
    sortByOnFilter?: string;
    sortOrderOnFilter?: string;
    isSearchStartedOnFilter?: boolean;
    isSearchSuccessfulOnFilter?: boolean;
    isLoadingOnFilter?: boolean;
    isErrorOnFilter?: boolean;
    authorsOnFilter?: string[];
    categoriesOnFilter?: string[];
    isEliminateAllergensActivatedOnFilter?: boolean;
    allFiltersOnFilter?: string[];
}

const initialState: FilterState = {
    pageOnFilter: 1,
    limitOnFilter: 8,
    allergensOnFilter: [],
    searchStringOnFilter: '',
    meatOnFilter: [],
    garnishOnFilter: [],
    subcategoriesIdsOnFilter: [],
    sortByOnFilter: '',
    sortOrderOnFilter: '',
    isSearchStartedOnFilter: false,
    isSearchSuccessfulOnFilter: true,
    isLoadingOnFilter: false,
    isErrorOnFilter: false,
    authorsOnFilter: [],
    categoriesOnFilter: [],
    isEliminateAllergensActivatedOnFilter: false,
    allFiltersOnFilter: [],
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setPageOnFilter(state, { payload }: PayloadAction<number>) {
            state.pageOnFilter = payload;
        },
        setLimitOnFilter(state, { payload }: PayloadAction<number>) {
            state.limitOnFilter = payload;
        },
        setAllergensOnFilter(state, { payload }: PayloadAction<string[]>) {
            state.allergensOnFilter = payload;
        },
        setSearchStringOnFilter(state, { payload }: PayloadAction<string>) {
            state.searchStringOnFilter = payload;
        },
        setMeatOnFilter(state, { payload }: PayloadAction<string[]>) {
            state.meatOnFilter = payload;
        },
        setGarnishOnFilter(state, { payload }: PayloadAction<string[]>) {
            state.garnishOnFilter = payload;
        },
        setSubcategoriesIdsOnFilter(state, { payload }: PayloadAction<string[]>) {
            state.subcategoriesIdsOnFilter = payload;
        },
        setAuthorsOnFilter(state, { payload }: PayloadAction<string[]>) {
            state.authorsOnFilter = payload;
        },
        setSortByOnFilter(state, { payload }: PayloadAction<string>) {
            state.sortByOnFilter = payload;
        },
        setSortOrderOnFilter(state, { payload }: PayloadAction<string>) {
            state.sortOrderOnFilter = payload;
        },

        setIsSearchStartedOnFilter(state, { payload }: PayloadAction<boolean>) {
            state.isSearchStartedOnFilter = payload;
        },

        setIsSearchSuccessfulOnFilter(state, { payload }: PayloadAction<boolean>) {
            state.isSearchSuccessfulOnFilter = payload;
        },
        setIsLoadingOnFilter(state, { payload }: PayloadAction<boolean>) {
            state.isLoadingOnFilter = payload;
        },
        setIsErrorOnFilter(state, { payload }: PayloadAction<boolean>) {
            state.isErrorOnFilter = payload;
        },
        setIsEliminatAllergensActivatedOnFilter(state) {
            state.isEliminateAllergensActivatedOnFilter =
                !state.isEliminateAllergensActivatedOnFilter;
        },
        setCategoriesOnFilter(state, { payload }: PayloadAction<string[]>) {
            state.categoriesOnFilter = payload;
        },
        setAllFiltersOnFilter(state, { payload }: PayloadAction<string[]>) {
            state.allFiltersOnFilter = payload;
        },
        addAllergenOnFilter(state, { payload }: PayloadAction<string>) {
            if (!state.allergensOnFilter) {
                state.allergensOnFilter = [];
            }
            state.allergensOnFilter.push(payload);
        },
        addMeatOnFilter(state, { payload }: PayloadAction<string>) {
            if (!state.meatOnFilter) {
                state.meatOnFilter = [];
            }
            state.meatOnFilter.push(payload);
        },
        addGarnishOnFilter(state, { payload }: PayloadAction<string>) {
            if (!state.garnishOnFilter) {
                state.garnishOnFilter = [];
            }
            state.garnishOnFilter.push(payload);
        },
        addSubcategoryIdOnFilter(state, { payload }: PayloadAction<string>) {
            if (!state.subcategoriesIdsOnFilter) {
                state.subcategoriesIdsOnFilter = [];
            }
            state.subcategoriesIdsOnFilter.push(payload);
        },
        addAuthorOnFilter(state, { payload }: PayloadAction<string>) {
            if (!state.authorsOnFilter) {
                state.authorsOnFilter = [];
            }
            state.authorsOnFilter.push(payload);
        },
        addCategoryOnFilter(state, { payload }: PayloadAction<string>) {
            if (!state.categoriesOnFilter) {
                state.categoriesOnFilter = [];
            }
            state.categoriesOnFilter.push(payload);
        },
        addFilterOnFilter(state, { payload }: PayloadAction<string>) {
            if (!state.allFiltersOnFilter) {
                state.allFiltersOnFilter = [];
            }
            state.allFiltersOnFilter.push(payload);
        },

        removeAllergenOnFilter(state, { payload }: PayloadAction<string>) {
            if (state.allergensOnFilter) {
                state.allergensOnFilter = state.allergensOnFilter.filter(
                    (item) => item !== payload,
                );
            }
        },
        removeMeatOnFilter(state, { payload }: PayloadAction<string>) {
            if (state.meatOnFilter) {
                state.meatOnFilter = state.meatOnFilter.filter((item) => item !== payload);
            }
        },
        removeGarnishOnFilter(state, { payload }: PayloadAction<string>) {
            if (state.garnishOnFilter) {
                state.garnishOnFilter = state.garnishOnFilter.filter((item) => item !== payload);
            }
        },
        removeSubcategoryIdOnFilter(state, { payload }: PayloadAction<string>) {
            if (state.subcategoriesIdsOnFilter) {
                state.subcategoriesIdsOnFilter = state.subcategoriesIdsOnFilter.filter(
                    (item) => item !== payload,
                );
            }
        },
        removeAuthorsOnFilter(state, { payload }: PayloadAction<string>) {
            if (state.authorsOnFilter) {
                state.authorsOnFilter = state.authorsOnFilter.filter((item) => item !== payload);
            }
        },
        removeCategoryOnFilter(state, { payload }: PayloadAction<string>) {
            if (state.categoriesOnFilter) {
                state.categoriesOnFilter = state.categoriesOnFilter.filter(
                    (item) => item !== payload,
                );
            }
        },
        removeFilterOnFilter(state, { payload }: PayloadAction<string>) {
            if (state.allFiltersOnFilter) {
                state.allFiltersOnFilter = state.allFiltersOnFilter.filter(
                    (item) => item !== payload,
                );
            }
        },
        resetSearchStateOnFilter(state) {
            Object.assign(state, initialState);
        },
    },
});

export const selectSearchStateOnFilter = (state: { filter: FilterState }) => state.filter;
export const selectPageOnFilter = (state: { filter: FilterState }) => state.filter.pageOnFilter;
export const selectLimitOnFilter = (state: { filter: FilterState }) => state.filter.limitOnFilter;
export const selectAllergensOnFilter = (state: { filter: FilterState }) =>
    state.filter.allergensOnFilter;
export const selectSearchStringOnFilter = (state: { filter: FilterState }) =>
    state.filter.searchStringOnFilter;
export const selectMeatOnFilter = (state: { filter: FilterState }) => state.filter.meatOnFilter;
export const selectGarnishOnFilter = (state: { filter: FilterState }) =>
    state.filter.garnishOnFilter;
export const selectSubcategoriesIdsOnFilter = (state: { filter: FilterState }) =>
    state.filter.subcategoriesIdsOnFilter;
export const selectSortByOnFilter = (state: { filter: FilterState }) => state.filter.sortByOnFilter;
export const selectSortOrderOnFilter = (state: { filter: FilterState }) =>
    state.filter.sortOrderOnFilter;
export const selectIsSearchStartedOnFilter = (state: { filter: FilterState }) =>
    state.filter.isSearchStartedOnFilter;
export const selectIsSearchSuccessfulOnFilter = (state: { filter: FilterState }) =>
    state.filter.isSearchSuccessfulOnFilter;
export const selectIsLoadingOnFilter = (state: { filter: FilterState }) =>
    state.filter.isLoadingOnFilter;
export const selectIsErrorOnFilter = (state: { filter: FilterState }) =>
    state.filter.isErrorOnFilter;
export const selectAuthorsOnFilter = (state: { filter: FilterState }) =>
    state.filter.authorsOnFilter;
export const selectCategoriesOnFilter = (state: { filter: FilterState }) =>
    state.filter.categoriesOnFilter;
export const selectAllFiltersOnFilter = (state: { filter: FilterState }) =>
    state.filter.allFiltersOnFilter;
export const selectEliminateAllergensOnFilter = (state: { filter: FilterState }) =>
    state.filter.isEliminateAllergensActivatedOnFilter;
export const {
    setAllFiltersOnFilter,
    setAllergensOnFilter,
    setAuthorsOnFilter,
    setCategoriesOnFilter,
    setGarnishOnFilter,
    setIsEliminatAllergensActivatedOnFilter,
    setIsErrorOnFilter,
    setIsLoadingOnFilter,
    setIsSearchStartedOnFilter,
    setIsSearchSuccessfulOnFilter,
    setLimitOnFilter,
    setMeatOnFilter,
    setPageOnFilter,
    setSearchStringOnFilter,
    setSortByOnFilter,
    setSortOrderOnFilter,
    setSubcategoriesIdsOnFilter,
    addAllergenOnFilter,
    addAuthorOnFilter,
    addCategoryOnFilter,
    addFilterOnFilter,
    addGarnishOnFilter,
    addMeatOnFilter,
    addSubcategoryIdOnFilter,
    removeAllergenOnFilter,
    removeAuthorsOnFilter,
    removeCategoryOnFilter,
    removeFilterOnFilter,
    removeGarnishOnFilter,
    removeMeatOnFilter,
    removeSubcategoryIdOnFilter,
    resetSearchStateOnFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
