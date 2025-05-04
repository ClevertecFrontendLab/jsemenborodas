import { ApiEndpoints } from '~/query/constants/api.ts';
import { ApiGroupNames } from '~/query/constants/api-group-names.ts';
import { EndpointNames } from '~/query/constants/endpoint-names.ts';
import { Tags } from '~/query/constants/tags.ts';
import { apiSlice } from '~/query/create-api.ts';

import { recipeRequest } from '../types/types';

interface RecipeArguments {
    page?: number;
    limit?: number;
    allergens?: string[];
    searchString?: string;
    meat?: string[];
    garnish?: string[];
    subcategoriesIds?: string[];
    sortBy?: string;
    sortOrder?: string;
}

export const recipeApiSlice = apiSlice
    .enhanceEndpoints({
        addTagTypes: [Tags.RECIPES],
    })
    .injectEndpoints({
        endpoints: (builder) => ({
            getRecipes: builder.query<recipeRequest, RecipeArguments>({
                query: (data = {}) => {
                    const params: Record<string, string | number | string[] | undefined> = {};
                    if (data.page !== undefined) params.page = data.page;
                    if (data.limit !== undefined) params.limit = data.limit;
                    if (data.allergens !== undefined) params.allergens = data.allergens;
                    if (data.searchString !== undefined) params.searchString = data.searchString;
                    if (data.meat !== undefined) params.meat = data.meat;
                    if (data.garnish !== undefined) params.garnish = data.garnish;
                    if (data.subcategoriesIds !== undefined)
                        params.subcategoriesIds = data.subcategoriesIds;
                    if (data.sortBy !== undefined) params.sortBy = data.sortBy;
                    if (data.sortOrder !== undefined) params.sortOrder = data.sortOrder;

                    return {
                        url: ApiEndpoints.RECIPES,
                        params: Object.keys(params).length > 0 ? params : undefined,
                        method: 'GET',
                        apiGroupName: ApiGroupNames.RECIPES,
                        name: EndpointNames.GET_RECIPES,
                    };
                },
                providesTags: [Tags.RECIPES],
            }),
        }),
    });

export const { useGetRecipesQuery } = recipeApiSlice;
