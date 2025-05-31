export interface SubCategory {
    _id: string;
    title: string;
    category: string;
    rootCategoryId: string;
}

export interface Category {
    _id: string;
    title: string;
    category: string;
    icon: string;
    description: string;
    subCategories: SubCategory[];
}

export interface step {
    stepNumber: number;
    description: string;
    image?: string;
}

export interface ingridient {
    title: string;
    count: string;
    measureUnit: string;
}

export interface recipe {
    title: string;
    description: string;
    time: number;
    image: string;
    meat: string;
    garnish: string;
    portions: number;
    authorId: string;
    categoriesIds: string[];
    steps: step[];
    nutritionValue: {
        calories: number;
        protein: number;
        fats: number;
        carbohydrates: number;
    };
    ingredients: ingridient[];
    likes: number;
    views: number;
    bookmarks: number;
    createdAt: string;
    _id: string;
    authorData: { login: string; firstName: string; lastName: string; subscribers: string[] };
}

export interface recipeRequest {
    data: recipe[];
    meta: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
}
export type Error = {
    error: string;
    message: string;
    statusCode: number;
};

export type ApiError = {
    data: Error;
    status?: number;
};

export type ApiErrorResponce = {
    error: ApiError;
    isUnhandledError: boolean;
    meta: { request: string[]; response: string[] };
};

export type AuthRequest = {
    login: string;
    password: string;
};

export type AuthErrorData = {
    error: string;
    message: string;
    statusCode: number;
};

export type AuthError = { status: number; data: AuthErrorData };
export type AuthSucces = { statusText: string; message: string };
export type RegisterRequest = {
    email: string;
    login: string;
    password: string;
    firstName: string;
    lastName: string;
};

export type ResponceMessage = {
    message: string;
    statusText: string;
};

export type RestoreRequest = {
    email: string;
    otpToken?: string;
    login?: string;
    password?: string;
    passwordConfirm?: string;
};

export type UploadImageRequest = {
    file: FormData;
};

export type FileUploadResponceSuccess = {
    data: {
        name: string;
        url: string;
        _id: string;
    };
};

export type FileUploadResponceError = {
    error: {
        data: { message: string; statusCode: number };
        status: number;
    };
};

export type FipleUploadResponce = FileUploadResponceSuccess | FileUploadResponceError;
export type MeasureUnit = { _id: string; name: string };

export type CreateRecipeError = {
    error: {
        data: {
            error: string;
            message: string;
            statusCode: number;
        };
        status: 409;
    };
};

export type CreateRecipeSuccess = {
    data: recipe;
};

export type saveDraftSuccess = {
    data: {
        categoriesIds: string[];
        description: string;
        image: string;
        ingredients: ingridient[];
        portions: number;
        steps: step[];
        time: number;
        title: string;
        _id: string;
    };
};

export type saveDraftError = {
    error: { data: { error: string; message: string[]; statusCode: number }; status: number };
};
