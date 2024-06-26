import { apiSlice } from "../../apiSlice";

export const apiAuth = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = apiAuth; // Ensure this name matches
