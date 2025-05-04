import { ApiEndpoints } from '~/query/constants/api.ts';
import { ApiGroupNames } from '~/query/constants/api-group-names.ts';
import { EndpointNames } from '~/query/constants/endpoint-names.ts';
import { Tags } from '~/query/constants/tags.ts';
import { apiSlice } from '~/query/create-api.ts';

import { Category } from '../types/types';

interface CategoriesProps {
    _id?: string;
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
                        ? `${ApiEndpoints.CATEGORIES}/${params._id}`
                        : ApiEndpoints.CATEGORIES,
                    method: 'GET',
                    apiGroupName: ApiGroupNames.CATEGORIES,
                    name: EndpointNames.GET_CATEGORIES,
                }),
                providesTags: [Tags.CATEGORIES],
            }),
        }),
    });

export const { useGetCategoriesQuery } = categoryApiSlice;
