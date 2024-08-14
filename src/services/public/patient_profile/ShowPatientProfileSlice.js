import { apiSlice } from "../../apiSlice";
import Cookies from "js-cookie"
export const ShowPatientProfileSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMedicalRecord: builder.query({
            query: (id) => ({
                url: `showMedicalRecord/${id}`,
                method: 'GET',
                headers:{'Authorization': `Bearer ${Cookies.get("token")}`},
            }),
            providesTags: ['MedicalRecord'],
        }),
        getMedicalAnalysis: builder.query({
            
            query: (id) => {
                { 
                    return {
                        url: `showMedicalAnalysis/${id}`,
                        method: 'GET',
                        headers:{'Authorization': `Bearer ${Cookies.get("token")}`},
                    };
                }
                
        },
            providesTags: ['MedicalAnalysis'],
        }),
        getPrescriptions: builder.query({
            query: (id) => ({
                url: `getPrescriptionsByPatient/${id}`,
                method: 'GET',
                headers:{'Authorization': `Bearer ${Cookies.get("token")}`},
            }),
            providesTags: ['Prescriptions'],
        }),
    })
});

export const {useGetPrescriptionsQuery , useGetMedicalAnalysisQuery , useGetMedicalRecordQuery} = ShowPatientProfileSlice