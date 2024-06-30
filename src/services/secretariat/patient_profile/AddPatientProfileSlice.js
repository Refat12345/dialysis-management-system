import { apiSlice } from "../../apiSlice";
import Cookies from "js-cookie"
export const AddPatientProfileSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
    createMedicalRecord: builder.mutation({
        query: (medicalRecord) => { 
            console.log(medicalRecord);
            return {
                url: `createMedicalRecord`,
                method: 'POST',
                body: medicalRecord,
                headers:{'Authorization': `Bearer ${Cookies.get("token")}`},
            };
            
        },
    }),
    addMedicalAnalysis: builder.mutation({
        query: (medicalAnalysis) => { 
            return {
                url: `addMedicalAnalysis`,
                method: 'POST',
                body: medicalAnalysis,
                headers:{'Authorization': `Bearer ${Cookies.get("token")}`},
            };
        },
    }),
    getAnalysisTypes:builder.query({
        query:()=>({
            url:"getAnalysisTypes",
            method:"GET"
        })
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
useAddPatientInfoMutation,
useGetAnalysisTypesQuery
} = AddPatientProfileSlice;