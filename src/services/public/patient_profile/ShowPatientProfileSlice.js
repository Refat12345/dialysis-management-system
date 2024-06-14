import { apiSlice } from "../../apiSlice";

export const ShowPatientProfileSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMedicalRecord: builder.query({
            query: (id) => ({
                url: `showMedicalRecord/${id}`,
                method: 'GET',
            }),
        }),
        getMedicalAnalysis: builder.query({
            query: (id) => ({
                url: `showMedicalAnalysis/${id}`,
                method: 'GET',
            }),
        }),
        getPrescriptions: builder.query({
            query: (id) => ({
                url: `getPrescriptionsByPatient/${id}`,
                method: 'GET',
            }),
        }),
    })
});

export const {useGetPrescriptionsQuery , useGetMedicalAnalysisQuery , useGetMedicalRecordQuery} = ShowPatientProfileSlice