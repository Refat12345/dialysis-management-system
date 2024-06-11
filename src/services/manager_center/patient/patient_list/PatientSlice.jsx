import { apiSlice } from "../../../apiSlice";

export const PatientSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPatient: builder.query({
      query: (status) => ({
        url: `getCenterUsersByRole/5/patient/${status}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPatientQuery } = PatientSlice;
