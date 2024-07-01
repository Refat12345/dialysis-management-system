import { apiSlice } from "../../apiSlice";

export const apiAuth = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Login 
    login: builder.mutation({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: data,
      }),
    }),
    // Verify
    verify: builder.mutation({
      query: (data) => ({
        url: "verify",
        method: "POST",
        body: data,
      }),
    }),
    // Get User by Verification Code
    getUserByVerificationCode: builder.mutation({
      query: (data) => ({
        url: "getUserByVerificationCode",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useVerifyMutation, useGetUserByVerificationCodeMutation } = apiAuth;
