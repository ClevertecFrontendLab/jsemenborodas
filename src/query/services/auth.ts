import { ApiEndpoints } from '~/query/constants/api.ts';
import { ApiGroupNames } from '~/query/constants/api-group-names.ts';
import { EndpointNames } from '~/query/constants/endpoint-names.ts';
import { Tags } from '~/query/constants/tags.ts';
import { apiSlice } from '~/query/create-api.ts';

import { AuthRequest, RegisterRequest } from '../types/types';

export const authApiSlice = apiSlice
    .enhanceEndpoints({
        addTagTypes: [Tags.AUTH],
    })
    .injectEndpoints({
        endpoints: (builder) => ({
            getAuth: builder.mutation<void, AuthRequest>({
                query: (authrequest) => ({
                    url: ApiEndpoints.AUTH,
                    method: 'POST',
                    body: authrequest,
                    apiGroupName: ApiGroupNames.AUTH,
                    name: EndpointNames.GET_AUTH,
                }),
                invalidatesTags: [Tags.AUTH],
            }),
            RegisterUser: builder.mutation<void, RegisterRequest>({
                query: (registerRequest) => ({
                    url: ApiEndpoints.REGISTER,
                    method: 'POST',
                    body: registerRequest,
                    apiGroupName: ApiGroupNames.AUTH,
                    name: EndpointNames.GET_AUTH,
                }),
                invalidatesTags: [Tags.AUTH],
            }),
        }),
    });

export const { useGetAuthMutation, useRegisterUserMutation } = authApiSlice;
