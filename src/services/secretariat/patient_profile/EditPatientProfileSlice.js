import { apiSlice } from "../../apiSlice";
import Cookies from "js-cookie"
export const AddPatientProfileSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
    editMedicalRecord: builder.mutation({
        query: (medicalRecord) => { 
            return {
                url: `updateMedicalRecord`,
                method: 'POST',
                body: medicalRecord,
                headers:{'Authorization': `Bearer ${Cookies.get("token")}`},
                
            };   
        },
        invalidatesTags: ['MedicalRecord'],
    }),
    editMedicalAnalysis: builder.mutation({
        query: (medicalAnalysis) => { 
            return {
                url: `updateMedicalAnalysis`,
                method: 'POST',
                body: medicalAnalysis,
                headers:{'Authorization': `Bearer ${Cookies.get("token")}`},
            };
        },
        invalidatesTags: ['MedicalAnalysis'],
    }),
    editPrescriptions: builder.mutation({
        query: (prescriptions) => { 
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