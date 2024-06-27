import { apiSlice } from "../../apiSlice";

export const ShowPatientProfileSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMedicalRecord: builder.query({
            query: (id) => ({
                url: `showMedicalRecord/${id}`,
                method: 'GET',
            }),
            providesTags: ['MedicalRecord'],
        }),
        getMedicalAnalysis: builder.query({
            query: (id) => ({
                url: `showMedicalAnalysis/${id}`,
                method: 'GET',
            }),
            providesTags: ['MedicalAnalysis'],
        }),
        getPrescriptions: builder.query({
            query: (id) => ({
                url: `getPrescriptionsByPatient/${id}`,
                method: 'GET',
            }),
            providesTags: ['Prescriptions'],
        }),
    })
});

export const {useGetPrescriptionsQuery , useGetMedicalAnalysisQuery , useGetMedicalRecordQuery} = ShowPatientProfileSlice