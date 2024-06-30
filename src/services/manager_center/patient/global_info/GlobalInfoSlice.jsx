import { apiSlice } from "../../../apiSlice";

export const generalDetailsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGeneralDetails: builder.query({
      query: (id) => ({
        url: `user/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetGeneralDetailsQuery } = generalDetailsApiSlice;
