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
    image: string;
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

export type RegisterRequest = {
    email: string;
    login: string;
    password: string;
    firstName: string;
    lastName: string;
};
