import { ApiGroupNames } from '~/query/constants/api-group-names.ts';
import { EndpointNames } from '~/query/constants/endpoint-names.ts';
import { Tags } from '~/query/constants/tags.ts';
import { apiSlice } from '~/query/create-api.ts';
import { setAppError } from '~/store/app-slice';

import { ApiErrorResponce, recipe, recipeRequest } from '../types/types';
import { GetError } from './utils/errorUtil';
import { GetRicepeParam } from './utils/recipeUtils';

export interface RecipeArguments {
    page?: number;
    limit?: number;
    allergens?: string[];
    searchString?: string;
    meat?: string[];
    garnish?: string[];
    subcategoriesIds?: string[];
    sortBy?: string;
    sortOrder?: string;
    id?: string;
}

type RecipeResponce = recipeRequest | recipe;

export const recipeApiSlice = apiSlice
    .enhanceEndpoints({
        addTagTypes: [Tags.RECIPES],
    })
    .injectEndpoints({
        endpoints: (builder) => ({
            getRecipes: builder.query<RecipeResponce, RecipeArguments>({
                query: (data = {}) => {
                    const { params, url } = GetRicepeParam(data);
                    return {
                        url: url,
                        params: Object.keys(params).length > 0 ? params : undefined,
                        method: 'GET',
                        apiGroupName: ApiGroupNames.RECIPES,
                        name: EndpointNames.GET_RECIPES,
                    };
                },
                providesTags: [Tags.RECIPES],
                async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                    try {
                        await queryFulfilled;
                    } catch (error) {
                        const errorProp = error as ApiErrorResponce;
                        dispatch(setAppError(GetError(errorProp)));
                    }
                },
                keepUnusedDataFor: Infinity,
            }),
        }),
    });

export const { useGetRecipesQuery } = recipeApiSlice;
