import { apiSlice } from "../../../services/apiSlice"; 

export const DialysisDetailsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDialysisDetails: builder.query({
      query: (id) => ({
        url: `getDialysisSessionDetails/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {useGetDialysisDetailsQuery} = DialysisDetailsSlice;

