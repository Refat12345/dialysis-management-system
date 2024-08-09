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
          console.log("editDATA",medicalRecord)
          return {
              url: `updateUser`,
              method: 'POST',
              body: medicalRecord,
              // headers: {
              //     'Authorization': 'Bearer 53|qd2zsftESjcGb6ePvjjsCMSJAlzhkwqrk0rkaf5B1c176c9f'
              //   }
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
        console.log("NEW PER IS ",medicalRecord)
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
