import { apiSlice } from "../../../apiSlice";

export const PatientSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPatient: builder.query({
      query: ({ option, centerId }) => ({
        url: `getCenterUsersByRole/${centerId}/patient/${option}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPatientQuery } = PatientSlice;
