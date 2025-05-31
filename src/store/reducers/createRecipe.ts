import { createSlice, PayloadAction } from '@reduxjs/toolkit';
type Step = {
    stepNumber: number;
    description: string;
    image?: string;
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
    isValidateStarted: boolean;
    isValidateSuccess: boolean;
    validSteps: {
        step1: boolean;
        step2: boolean;
        step3: boolean;
        step4: boolean;
    };
    isSaveDraftStarted: boolean;
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
    isValidateStarted: false,
    isValidateSuccess: false,
    validSteps: {
        step1: false,
        step2: false,
        step3: false,
        step4: false,
    },
    isSaveDraftStarted: false,
};

export const createRecipeSlice = createSlice({
    name: 'createRecipe',
    initialState,
    reducers: {
        setTitle(state, { payload }: PayloadAction<string>) {
            state.title = payload;
        },
        setDescriptionn(state, { payload }: PayloadAction<string>) {
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
            state.steps = payload.map(({ image, ...s }) =>
                image === 'defaultImage' ? s : { ...s, image },
            );
        },
        setIngridients(state, { payload }: PayloadAction<ingridient[]>) {
            state.ingredients = payload;
        },
        setIsValidateStarted(state, { payload }: PayloadAction<boolean>) {
            state.isValidateStarted = payload;
        },
        setIsSaveDraftStarted(state, { payload }: PayloadAction<boolean>) {
            state.isSaveDraftStarted = payload;
        },
        setIsValidateSuccess(state, { payload }: PayloadAction<boolean>) {
            state.isValidateSuccess = payload;
        },
        setStep1(state, { payload }: PayloadAction<boolean>) {
            state.validSteps.step1 = payload;
        },
        setStep2(state, { payload }: PayloadAction<boolean>) {
            state.validSteps.step2 = payload;
        },
        setStep3(state, { payload }: PayloadAction<boolean>) {
            state.validSteps.step3 = payload;
        },
        setStep4(state, { payload }: PayloadAction<boolean>) {
            state.validSteps.step4 = payload;
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
export const selectorIsValidateStarted = (state: { createRecipe: CreateRecipeState }) =>
    state.createRecipe.isValidateStarted;
export const selectorIsValidateSuccess = (state: { createRecipe: CreateRecipeState }) =>
    state.createRecipe.isValidateSuccess;
export const selectorValidSteps = (state: { createRecipe: CreateRecipeState }) =>
    state.createRecipe.validSteps;
export const selectorIsSaveDraftStarted = (state: { createRecipe: CreateRecipeState }) =>
    state.createRecipe.isSaveDraftStarted;

export const {
    setCategoriesIds,
    setDescriptionn,
    setImage,
    setIngridients,
    setPortions,
    setSteps,
    setTime,
    setTitle,
    setIsValidateStarted,
    setIsValidateSuccess,
    setStep1,
    setStep2,
    setStep3,
    setStep4,
    setIsSaveDraftStarted,
} = createRecipeSlice.actions;
export default createRecipeSlice.reducer;
