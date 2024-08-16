import { apiSlice } from "../../apiSlice";
import Cookies from "js-cookie"
import { incrementOrderCount } from "../../manager_center/orders/OrdersSlice";
export const AddPatientProfileSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createMedicalRecord: builder.mutation({
            query: (medicalRecord) => { 
                return {
                    url: `createMedicalRecord`,
                    method: 'POST',
                    body: medicalRecord,
                    headers: {'Authorization': `Bearer ${Cookies.get("token")}`},
                };
            },
            invalidatesTags:  ['Orders'],
            async onQueryStarted(medicalRecord, { dispatch, queryFulfilled }) {
                try {
                    const { data, error } = await queryFulfilled;
                    if (data && !error) {
                        dispatch(incrementOrderCount());
                    }
                } catch (err) {
                    console.error("Failed to create medical record: ", err);
                }
            }
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
        query:()=>{
            console.log(Cookies.get("token"));
            return{
            url:"getAnalysisTypes",
            method:"GET",
            headers:{'Authorization': `Bearer ${Cookies.get("token")}`},
        }}
    }),
    addPatientInfo: builder.mutation({
        query: (Info) => { 
            return {
                url: `addPatientInfo`,
                method: 'POST',
                body: Info,
                headers:{'Authorization': `Bearer ${Cookies.get("token")}`},
            };
        },
        invalidatesTags: ['Orders', 'globalInfo'],
        async onQueryStarted(addPatientInfo, { dispatch, queryFulfilled }) {
            try {
                await queryFulfilled;
                dispatch(incrementOrderCount());
            } catch (err) {
                console.error("Failed to create medical record: ", err);
            }
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