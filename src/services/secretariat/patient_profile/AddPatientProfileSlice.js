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
    })
})
});

export const {
useCreateMedicalRecordMutation,
useAddMedicalAnalysisMutation
} = AddPatientProfileSlice;