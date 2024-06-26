import { apiSlice } from "../../apiSlice";

export const AddPatientProfileSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
    createMedicalRecord: builder.mutation({
        query: (medicalRecord) => { 
            return {
                url: `createMedicalRecord`,
                method: 'POST',
                body: medicalRecord
            };
            
        },
    }),
    addMedicalAnalysis: builder.mutation({
        query: (medicalAnalysis) => { 
            return {
                url: `addMedicalAnalysis`,
                method: 'POST',
                body: medicalAnalysis
            };
        },
    }),

    addPatientInfo: builder.mutation({
        query: (Info) => { 
            return {
                url: `addPatientInfo`,
                method: 'POST',
                body: Info
            };
            
        },
    }),
})
});

export const {
useCreateMedicalRecordMutation,
useAddMedicalAnalysisMutation,
useAddPatientInfoMutation
} = AddPatientProfileSlice;