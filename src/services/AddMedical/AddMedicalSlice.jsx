import { apiSlice } from "../../services/apiSlice";
import Cookies from "js-cookie";

export const AddMedicalSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addMedical: builder.mutation({
      query: (shiftRecord) => {
        return {
          url: `createUser`,
          method: "POST",
          body: shiftRecord,
          headers: { Authorization: `Bearer ${Cookies.get("token")}` },
        };
      },
    }),
  }),
});

export const { useAddMedicalMutation } = AddMedicalSlice;
