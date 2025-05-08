import { ApiEndpoints } from '~/query/constants/api.ts';
import { ApiGroupNames } from '~/query/constants/api-group-names.ts';
import { EndpointNames } from '~/query/constants/endpoint-names.ts';
import { Tags } from '~/query/constants/tags.ts';
import { apiSlice } from '~/query/create-api.ts';
import { setAppError } from '~/store/app-slice';

import { ApiErrorResponce, recipe, recipeRequest } from '../types/types';
import { GetError } from './utils/errorUtil';

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
                async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                    try {
                        await queryFulfilled;
                    } catch (error) {
                        const errorProp = error as ApiErrorResponce;
                        console.log('error');
                        dispatch(setAppError(GetError(errorProp)));
                    }
                },
                keepUnusedDataFor: Infinity,
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

export const {
    useGetRecipeByCategoryQuery,
    useGetRecipeByLikesQuery,
    useGetRecipeByCreateDateQuery,
} = categoryApiSlice;
