import { apiSlice } from "../../apiSlice";

export const AddPrescriptionSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
    createPrescription: builder.mutation({
        query: (medicalRecord) => { 
            console.log("koi",medicalRecord)
            return {
                url: `addPrescription`,
                method: 'POST',
                body: medicalRecord,
                headers: {
                    'Authorization': 'Bearer 1|PxxVjoVXrx6fKPBxJOHzvaSsRtQpSRfIgn5imzZC0297ebdf'
                  }
            };
            
        },
    }),
    getMedicineNames: builder.query({
        query: () => {
          return {
            url: `getMedicineNames/session`,
            method: "GET",
          };
        },
      }),
  
})

});

export const {
useCreatePrescriptionMutation,
useGetMedicineNamesQuery
} = AddPrescriptionSlice;