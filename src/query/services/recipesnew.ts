import { ApiEndpoints } from '~/query/constants/api.ts';
import { ApiGroupNames } from '~/query/constants/api-group-names.ts';
import { EndpointNames } from '~/query/constants/endpoint-names.ts';
import { Tags } from '~/query/constants/tags.ts';
import { apiSlice } from '~/query/create-api.ts';

import { recipe, recipeRequest } from '../types/types';

interface CategoriesProps {
    _id?: string;
    limit?: number;
    page?: number;
}

export const categoryApiSlice = apiSlice
    .enhanceEndpoints({
        addTagTypes: [Tags.RECIPES],
    })
    .injectEndpoints({
        endpoints: (builder) => ({
            getRecipeByCategory: builder.query<recipe[], CategoriesProps>({
                query: (params = {}) => ({
                    url: params._id
                        ? `${ApiEndpoints.RECIPES}category/${params._id}`
                        : ApiEndpoints.RECIPES,
                    method: 'GET',
                    params: {
                        limit: params?.limit,
                    },
                    apiGroupName: ApiGroupNames.RECIPES,
                    name: EndpointNames.GET_RECIPES,
                }),
                providesTags: [Tags.RECIPES],
            }),
            getRecipeByLikes: builder.query<recipeRequest, CategoriesProps>({
                query: (params = {}) => ({
                    url: ApiEndpoints.TEST,
                    method: 'GET',
                    params: {
                        sortBy: 'likes',
                        limit: params?.limit,
                        page: params?.page,
                        sortOrder: 'desc',
                    },
                    apiGroupName: ApiGroupNames.RECIPES,
                    name: EndpointNames.GET_RECIPES,
                }),
                providesTags: [Tags.RECIPES],
            }),
            getRecipeByCreateDate: builder.query<recipeRequest, CategoriesProps>({
                query: (params = {}) => ({
                    url: ApiEndpoints.TEST,
                    method: 'GET',
                    params: {
                        sortBy: 'createdAt',
                        limit: params?.limit,

                        sortOrder: 'desc',
                    },
                    apiGroupName: ApiGroupNames.RECIPES,
                    name: EndpointNames.GET_RECIPES,
                }),
                providesTags: [Tags.RECIPES],
            }),
        }),
    });

export const {
    useGetRecipeByCategoryQuery,
    useGetRecipeByLikesQuery,
    useGetRecipeByCreateDateQuery,
} = categoryApiSlice;
