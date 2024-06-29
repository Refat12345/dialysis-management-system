import { apiSlice } from "../../apiSlice";

export const AddPrescriptionSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
    createPrescription: builder.mutation({
        query: (medicalRecord) => { 
            return {
                url: `addPrescription`,
                method: 'POST',
                body: medicalRecord,
              
            };
            
        },
    }),
    getMedicineNames: builder.query({
        query: () => {
          return {
            url: `getMedicineNames/global`,
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