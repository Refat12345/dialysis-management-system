import { apiSlice } from "../../services/apiSlice";

export const AddMedicalSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
  
    addMedical: builder.mutation({
      query: (shiftRecord) => {
        console.log("pppp",shiftRecord)
        return {
          url: `createUser`,
          method: "POST",
          body: shiftRecord,
        };
      },
    }),
   
    

   
  }),
});

export const {
  useAddMedicalMutation
} = AddMedicalSlice;
