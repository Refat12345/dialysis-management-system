import { apiSlice } from "../../../apiSlice";
import Cookies from "js-cookie"
export const UserDetailsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserDetails: builder.query({
      query: (id) => ({
        url: `/user/${id}`,
        method: "GET",
        headers:{"Authorization" : `Bearer ${Cookies.get("token")}`}
      }),
    }),

    EditUser: builder.mutation({
      query: (medicalRecord) => { 
          return {
              url: `updateUser`,
              method: 'POST',
              body: medicalRecord,        
              headers:{"Authorization" : `Bearer ${Cookies.get("token")}`}

          };
          
      },
  }),

  getUserPermissions: builder.query({
    query: (id) => ({
      url: `/getUserPermissions/${id}`,
      method: "GET",
      headers:{"Authorization" : `Bearer ${Cookies.get("token")}`}
    }),
  }),

  EditUserPermissions: builder.mutation({
    query: (medicalRecord) => { 
        return {
            url: `updatePermissionsUser`,
            method: 'POST',
            body: medicalRecord,
            headers:{"Authorization" : `Bearer ${Cookies.get("token")}`}
            
        };
        
    },
}),






    
    
  }),
});

export const { useGetUserDetailsQuery , useEditUserMutation , useGetUserPermissionsQuery ,useEditUserPermissionsMutation } = UserDetailsSlice;
