import { apiSlice } from "../../../../services/apiSlice";

export const PatientSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPatient: builder.query({
      query: (status) => ({
        url: `getCenterUsersByRole/0/patient/${status}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPatientQuery } = PatientSlice;
