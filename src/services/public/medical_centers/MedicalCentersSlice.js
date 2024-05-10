import { apiSlice } from '../../apiSlice';

export const apiMedicalCenters = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMedicalCenters: builder.query({
            query: () => ({
                url: 'getMedicalCenters',
                method: 'GET',
            }),
        }),
    })
});

export const {
  useGetMedicalCentersQuery
} = apiMedicalCenters;