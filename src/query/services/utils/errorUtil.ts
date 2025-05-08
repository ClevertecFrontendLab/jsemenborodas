import { ApiError, ApiErrorResponce } from '~/query/types/types';

export function GetError(errorProp: ApiErrorResponce) {
    const apiError = errorProp.error as ApiError;
    const Error = apiError.data;
    return Error.message;
}
