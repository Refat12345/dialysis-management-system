import { apiSlice } from "../../apiSlice";
import Cookies from "js-cookie"
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
    // LogOut
    logout:builder.mutation({
      query:()=>({
        url:"logout",
        method:"POST",
        headers:{"Authorization" : `Bearer ${Cookies.get("token")}`},
        body:{
          "deviceToken":"sss"
        },
      })
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

export const { useLoginMutation, useVerifyMutation, useGetUserByVerificationCodeMutation ,useLogoutMutation} = apiAuth;
