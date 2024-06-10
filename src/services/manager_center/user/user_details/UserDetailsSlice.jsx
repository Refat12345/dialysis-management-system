import { apiSlice } from "../../../apiSlice";

export const UserDetailsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserDetails: builder.query({
      query: (id) => ({
        url: `/user/${id}`,
        method: "GET",
      }),
    }),
    
  }),
});

export const { useGetUserDetailsQuery } = UserDetailsSlice;
