import { apiSlice } from "../../apiSlice";

export const apiMedicalAnalysis = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMedicalAnalysis: builder.query({
            query: (id) => ({
                url: `/${id}/getMedicalAnalysis`,
                method: 'GET',
            }),
        }),
    })
});

export const {useGetMedicalAnalysisQuery} = apiMedicalAnalysis