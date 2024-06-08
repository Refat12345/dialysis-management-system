import { apiSlice } from './../../services/apiSlice'
export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendQuery: builder.mutation({
      query: ({ dataSet, query, wordEmbedding }) => ({
        url: `/addPatientInfo`,
        method: "POST",
        body: {
          dataSet,
          query,
          wordEmbedding,
        },
      }),
    }),
  }),
});

export const { useSendQueryMutation } = extendedApiSlice;
