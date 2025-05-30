import { createSlice, PayloadAction } from '@reduxjs/toolkit';
type Step = {
    stepNumber: number;
    description: string;
    image: string;
};

type ingridient = {
    title: string;
    count: number;
    measureUnit: string;
};
export interface CreateRecipeState {
    title: string;
    description: string;
    time: number;
    categoriesIds: string[];
    portions: number;
    image: string;
    steps: Step[];
    ingredients: ingridient[];
}

const initialState: CreateRecipeState = {
    title: '',
    description: '',
    time: 1,
    categoriesIds: [],
    portions: 1,
    image: '',
    steps: [],
    ingredients: [],
};

export const createRecipeSlice = createSlice({
    name: 'createRecipe',
    initialState,
    reducers: {
        setTitle(state, { payload }: PayloadAction<string>) {
            state.title = payload;
        },
        setDescription(state, { payload }: PayloadAction<string>) {
            state.description = payload;
        },
        setTime(state, { payload }: PayloadAction<number>) {
            state.time = payload;
        },
        setCategoriesIds(state, { payload }: PayloadAction<string[]>) {
            state.categoriesIds = payload;
        },
        setPortions(state, { payload }: PayloadAction<number>) {
            state.portions = payload;
        },
        setImage(state, { payload }: PayloadAction<string>) {
            state.image = payload;
        },
        setSteps(state, { payload }: PayloadAction<Step[]>) {
            state.steps = payload;
        },
        setIngridients(state, { payload }: PayloadAction<ingridient[]>) {
            state.ingredients = payload;
        },
    },
});

export const selectorTitle = (state: { createRecipe: CreateRecipeState }) =>
    state.createRecipe.title;
export const selectorDescription = (state: { createRecipe: CreateRecipeState }) =>
    state.createRecipe.description;
export const selectorTime = (state: { createRecipe: CreateRecipeState }) => state.createRecipe.time;
export const selectorCategoriesIds = (state: { createRecipe: CreateRecipeState }) =>
    state.createRecipe.categoriesIds;
export const selectorPortions = (state: { createRecipe: CreateRecipeState }) =>
    state.createRecipe.portions;
export const selectorImage = (state: { createRecipe: CreateRecipeState }) =>
    state.createRecipe.image;
export const selectorSteps = (state: { createRecipe: CreateRecipeState }) =>
    state.createRecipe.steps;
export const selectorIngridients = (state: { createRecipe: CreateRecipeState }) =>
    state.createRecipe.ingredients;

export const {
    setCategoriesIds,
    setDescription,
    setImage,
    setIngridients,
    setPortions,
    setSteps,
    setTime,
    setTitle,
} = createRecipe.actions;
export default createRecipe.reducer;
