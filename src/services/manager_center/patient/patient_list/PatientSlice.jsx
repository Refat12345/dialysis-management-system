import { apiSlice } from "../../../apiSlice";
import Cookies from "js-cookie"
export const PatientSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPatient: builder.query({
      query: ({ option, centerId }) => ({
        url: `getCenterUsersByRole/${centerId}/patient/${option}`,
        method: "GET",
        headers:{"Authorization" : `Bearer ${Cookies.get("token")}`}
      }),
      providesTags: ["hi"],

    }),

    addToWaiting: builder.mutation({
      query: (id) => {
        return {
          url: `updatePatientStatus/${id}/waiting`,
          method: "POST",
          headers:{"Authorization" : `Bearer ${Cookies.get("token")}`}
        };
      },
      invalidatesTags: ["hi"],

    }),
  }),
});

export const { useGetPatientQuery,useAddToWaitingMutation } = PatientSlice;
