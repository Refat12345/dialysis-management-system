import { apiSlice } from "../../../../services/apiSlice";

export const UserSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (role) => ({
        url: `getCenterUsersByRole/0/${role}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUserQuery } = UserSlice;
