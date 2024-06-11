import { apiSlice } from '../../apiSlice';

export const apiShowMedicalCenters = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMedicalCenters: builder.query({
            query: () => ({
                url: 'getAllMedicalCenters',
                method: 'GET',
                
            }),
        }),
    })
});

export const {
  useGetMedicalCentersQuery
} = apiShowMedicalCenters;