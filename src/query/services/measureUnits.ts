import { ApiEndpoints } from '~/query/constants/api.ts';
import { ApiGroupNames } from '~/query/constants/api-group-names.ts';
import { EndpointNames } from '~/query/constants/endpoint-names.ts';
import { Tags } from '~/query/constants/tags.ts';
import { apiSlice } from '~/query/create-api.ts';

import { MeasureUnit } from '../types/types';

export const measureUnitsApiSlice = apiSlice
    .enhanceEndpoints({
        addTagTypes: [Tags.MEASURE_UNITS],
    })
    .injectEndpoints({
        endpoints: (builder) => ({
            getMeasureUnits: builder.query<MeasureUnit[], void>({
                query: () => ({
                    url: ApiEndpoints.MEASURE_UNITS,
                    method: 'GET',
                    headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
                    apiGroupName: ApiGroupNames.MEASURE_UNITS,
                    name: EndpointNames.GET_MEASURE_UNITS,
                }),
                providesTags: [Tags.MEASURE_UNITS],
            }),
        }),
    });

export const { useGetMeasureUnitsQuery } = measureUnitsApiSlice;
