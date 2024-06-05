import { apiSlice } from "../../../../services/apiSlice";


export const GeneralDialysisSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGeneralDialysis: builder.query({
      query: ({ month, year }) => {
        return {
          url: `getDialysisSessions/0/${month}/${year}`,
          method: "GET",
        };
      },
    }),
  }),
});
export const {  useGetGeneralDialysisQuery } = GeneralDialysisSlice;
