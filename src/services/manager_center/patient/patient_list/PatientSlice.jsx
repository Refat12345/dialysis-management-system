import { apiSlice } from "../../../apiSlice";

export const PatientSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPatient: builder.query({
      query: ({ option, centerId }) => ({
        url: `getCenterUsersByRole/${centerId}/patient/${option}`,
        method: "GET",
      }),
      providesTags: ["hi"],

    }),

    addToWaiting: builder.mutation({
      query: (id) => {
        return {
          url: `updatePatientStatus/${id}/waiting`,
          method: "POST",
        };
      },
      invalidatesTags: ["hi"],

    }),
  }),
});

export const { useGetPatientQuery,useAddToWaitingMutation } = PatientSlice;
