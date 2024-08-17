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
    // Get User by Verification Code
    getUserByVerificationCode: builder.mutation({
      query: (data) => ({
        url: "getUserByVerificationCode",
        method: "POST",
        body: data,
      }),
    }),
    // sendDeviceToken: builder.mutation({
      
    //   query: (data) => ({
    //     url: "senddeviceTokenDeviceID",
    //     method: "POST",
    //     body: data,
    //     headers:{"Authorization" : `Bearer ${Cookies.get("token")}`}
    //   }),
    // }),
    sendDeviceToken: builder.mutation({
      query: (Info) => { 

       

        console.log("Info",Info)
        

          return {
              url: `senddeviceTokenDeviceID`,
              method: 'POST',
              body: {
                deviceToken : Info.deviceToken,
                deviceID : Info.deviceID
              },
              headers:{"Authorization" : `Bearer ${Info.token}`}
          };
          
      },
  }),
  }),
});

export const { useLoginMutation, useVerifyMutation, useGetUserByVerificationCodeMutation ,useSendDeviceTokenMutation} = apiAuth;
