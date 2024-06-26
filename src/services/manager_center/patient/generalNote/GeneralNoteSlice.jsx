import { apiSlice } from "../../../apiSlice";

export const GeneralDetailsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGeneralDetails: builder.query({
      query: (status) => ({
        url: `getNotesByreceiverID/${status}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetGeneralDetailsQuery } = GeneralDetailsSlice;
