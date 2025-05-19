import { FetchBaseQueryMeta } from '@reduxjs/toolkit/query';
import { useLocation } from 'react-router';

import { ApiEndpoints } from '~/query/constants/api.ts';
import { ApiGroupNames } from '~/query/constants/api-group-names.ts';
import { EndpointNames } from '~/query/constants/endpoint-names.ts';
import { Tags } from '~/query/constants/tags.ts';
import { apiSlice } from '~/query/create-api.ts';
import { setAppError, setAppLoader } from '~/store/app-slice';

import { Category } from '../types/types';

interface CategoriesProps {
    _id?: string;
    isOnlyParent?: boolean;
}
const UseCurrentLocation = () => useLocation();
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
                    const location = UseCurrentLocation();
                    const pathSegments = location.pathname.split('/').filter(Boolean);

                    dispatch(setAppLoader(true));
                    try {
                        await queryFulfilled;
                    } catch (error) {
                        if (pathSegments[0] === 'login' || pathSegments[0] === 'register') {
                            console.log(error);
                            return;
                        }
                        dispatch(setAppError('Error'));
                    } finally {
                        dispatch(setAppLoader(false));
                    }
                },
                keepUnusedDataFor: Infinity,
            }),
        }),
    });

export const { useGetCategoriesQuery } = categoryApiSlice;
