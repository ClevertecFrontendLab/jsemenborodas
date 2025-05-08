import { FetchBaseQueryMeta } from '@reduxjs/toolkit/query';

import { ApiEndpoints } from '~/query/constants/api.ts';
import { ApiGroupNames } from '~/query/constants/api-group-names.ts';
import { EndpointNames } from '~/query/constants/endpoint-names.ts';
import { Tags } from '~/query/constants/tags.ts';
import { apiSlice } from '~/query/create-api.ts';
import { setAppError } from '~/store/app-slice';

import { ApiErrorResponce, Category } from '../types/types';
import { GetError } from './utils/errorUtil';

interface CategoriesProps {
    _id?: string;
    isOnlyParent?: boolean;
}

export const categoryApiSlice = apiSlice
    .enhanceEndpoints({
        addTagTypes: [Tags.CATEGORIES],
    })
    .injectEndpoints({
        endpoints: (builder) => ({
            getCategories: builder.query<Category[], CategoriesProps>({
                query: (params = {}) => ({
                    url: params._id
                        ? `${ApiEndpoints.CATEGORIES}${params._id}`
                        : ApiEndpoints.CATEGORIES,
                    method: 'GET',
                    apiGroupName: ApiGroupNames.CATEGORIES,
                    name: EndpointNames.GET_CATEGORIES,
                }),
                transformResponse: (
                    response: Category[],
                    _meta: FetchBaseQueryMeta,
                    arg: CategoriesProps,
                ): Category[] => {
                    const { isOnlyParent } = arg;
                    if (isOnlyParent) {
                        return response.filter((res) => res.subCategories !== undefined);
                    }
                    return response;
                },

                providesTags: [Tags.CATEGORIES],
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

export const { useGetCategoriesQuery } = categoryApiSlice;
