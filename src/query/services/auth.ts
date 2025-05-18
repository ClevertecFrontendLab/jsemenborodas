import { ApiEndpoints } from '~/query/constants/api.ts';
import { ApiGroupNames } from '~/query/constants/api-group-names.ts';
import { EndpointNames } from '~/query/constants/endpoint-names.ts';
import { Tags } from '~/query/constants/tags.ts';
import { apiSlice } from '~/query/create-api.ts';

import { AuthRequest, RegisterRequest, RestoreRequest } from '../types/types';

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
            registerUser: builder.mutation<void, RegisterRequest>({
                query: (registerRequest) => ({
                    url: ApiEndpoints.REGISTER,
                    method: 'POST',
                    body: registerRequest,
                    apiGroupName: ApiGroupNames.AUTH,
                    name: EndpointNames.GET_AUTH,
                }),
                invalidatesTags: [Tags.AUTH],
            }),
            restoreUser: builder.mutation<void, RestoreRequest>({
                query: (restoreRequest) => ({
                    url: ApiEndpoints.RESTORE,
                    method: 'POST',
                    body: restoreRequest,
                    apiGroupName: ApiGroupNames.AUTH,
                    name: EndpointNames.GET_AUTH,
                }),
                invalidatesTags: [Tags.AUTH],
            }),
            verifyOTP: builder.mutation<void, RestoreRequest>({
                query: (restoreRequest) => ({
                    url: ApiEndpoints.VERIFYOTP,
                    method: 'POST',
                    body: restoreRequest,
                    apiGroupName: ApiGroupNames.AUTH,
                    name: EndpointNames.GET_AUTH,
                }),
                invalidatesTags: [Tags.AUTH],
            }),
            ResetPassword: builder.mutation<void, RestoreRequest>({
                query: (restoreRequest) => ({
                    url: ApiEndpoints.RESETPASSWORD,
                    method: 'POST',
                    body: restoreRequest,
                    apiGroupName: ApiGroupNames.AUTH,
                    name: EndpointNames.GET_AUTH,
                }),
                invalidatesTags: [Tags.AUTH],
            }),
        }),
    });

export const {
    useGetAuthMutation,
    useRegisterUserMutation,
    useRestoreUserMutation,
    useVerifyOTPMutation,
    useResetPasswordMutation,
} = authApiSlice;
