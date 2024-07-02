import { apiSlice } from "../../apiSlice";
import Cookies from "js-cookie"
export const AddPrescriptionSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
    createPrescription: builder.mutation({
        query: (medicalRecord) => { 
            return {
                url: `addPrescription`,
                method: 'POST',
                body: medicalRecord,
                headers:{"Authorization" : `Bearer ${Cookies.get("token")}`}
              
            };
            
            
        },
        invalidatesTags: ['Prescriptions'],
    }),
    getMedicineNames: builder.query({
        query: () => {
          return {
            url: `getMedicineNames/global`,
            method: "GET",
            headers:{"Authorization" : `Bearer ${Cookies.get("token")}`}
          };
        },
      }),
  
})

});

export const {
useCreatePrescriptionMutation,
useGetMedicineNamesQuery
} = AddPrescriptionSlice;