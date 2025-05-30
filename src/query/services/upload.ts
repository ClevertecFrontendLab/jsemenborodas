import { ApiEndpoints } from '~/query/constants/api.ts';
import { ApiGroupNames } from '~/query/constants/api-group-names.ts';
import { EndpointNames } from '~/query/constants/endpoint-names.ts';
import { Tags } from '~/query/constants/tags.ts';
import { apiSlice } from '~/query/create-api.ts';

import { FipleUploadResponce } from '../types/types';

export const uploadApiSlice = apiSlice
    .enhanceEndpoints({
        addTagTypes: [Tags.UPLOAD],
    })
    .injectEndpoints({
        endpoints: (builder) => ({
            uploadImage: builder.mutation<FipleUploadResponce, FormData>({
                query: (request) => ({
                    url: ApiEndpoints.UPLOAD,
                    method: 'POST',
                    headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
                    body: request,
                    apiGroupName: ApiGroupNames.UPLOAD,
                    name: EndpointNames.UPLOAD,
                }),
                invalidatesTags: [Tags.UPLOAD],
            }),
        }),
    });

export const { useUploadImageMutation } = uploadApiSlice;
