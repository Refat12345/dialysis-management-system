import { apiSlice } from "../../apiSlice";

export const AddPatientProfileSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
    editMedicalRecord: builder.mutation({
        query: (medicalRecord) => { 
            return {
                url: `updateMedicalRecord`,
                method: 'POST',
                body: medicalRecord,
                
            };   
        },
        invalidatesTags: ['MedicalRecord'],
    }),
    editMedicalAnalysis: builder.mutation({
        query: (medicalAnalysis) => { 
            return {
                url: `updateMedicalAnalysis`,
                method: 'POST',
                body: medicalAnalysis
            };
        },
        invalidatesTags: ['MedicalAnalysis'],
    }),
    editPrescriptions: builder.mutation({
        query: (prescriptions) => { 
            console.log(prescriptions.object);
            return {
                url: `updatePrescription/${prescriptions.prescriptionId}`,
                method: 'POST',
                body: prescriptions.object
            };
        },
        invalidatesTags: ['Prescriptions'],
    })
})
});

export const {
useEditMedicalRecordMutation,
useEditMedicalAnalysisMutation,
useEditPrescriptionsMutation
} = AddPatientProfileSlice;