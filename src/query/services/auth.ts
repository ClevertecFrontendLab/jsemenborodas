import { ApiEndpoints } from '~/query/constants/api.ts';
import { ApiGroupNames } from '~/query/constants/api-group-names.ts';
import { EndpointNames } from '~/query/constants/endpoint-names.ts';
import { Tags } from '~/query/constants/tags.ts';
import { apiSlice } from '~/query/create-api.ts';

import {
    AuthError,
    AuthRequest,
    AuthSucces,
    RegisterRequest,
    RestoreRequest,
} from '../types/types';

type SignInResponce = AuthError | AuthSucces;

export const authApiSlice = apiSlice

    .enhanceEndpoints({
        addTagTypes: [Tags.AUTH],
    })

    .injectEndpoints({
        endpoints: (builder) => ({
            getAuth: builder.mutation<SignInResponce, AuthRequest>({
                query: (authrequest) => ({
                    url: ApiEndpoints.AUTH,
                    method: 'POST',
                    body: authrequest,
                    apiGroupName: ApiGroupNames.AUTH,
                    name: EndpointNames.GET_AUTH,
                }),
                transformResponse: (responce: SignInResponce, meta): SignInResponce => {
                    const token = meta?.response?.headers.get('authentication-access');
                    if (token) {
                        localStorage.setItem('accessToken', token);
                    }
                    return responce;
                },
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
