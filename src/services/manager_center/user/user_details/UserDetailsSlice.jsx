import { apiSlice } from "../../../apiSlice";

export const UserDetailsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserDetails: builder.query({
      query: (id) => ({
        url: `/user/${id}`,
        method: "GET",
      }),
    }),

    EditUser: builder.mutation({
      query: (medicalRecord) => { 
          console.log("koi",medicalRecord)
          return {
              url: `updateUser`,
              method: 'POST',
              body: medicalRecord,
              headers: {
                  'Authorization': 'Bearer 53|qd2zsftESjcGb6ePvjjsCMSJAlzhkwqrk0rkaf5B1c176c9f'
                }
          };
          
      },
  }),

  getUserPermissions: builder.query({
    query: (id) => ({
      url: `/getUserPermissions/${id}`,
      method: "GET",
    }),
  }),

  EditUserPermissions: builder.mutation({
    query: (medicalRecord) => { 
        console.log("koi",medicalRecord)
        return {
            url: `updatePermissionsUser`,
            method: 'POST',
            body: medicalRecord,
            
        };
        
    },
}),






    
    
  }),
});

export const { useGetUserDetailsQuery , useEditUserMutation , useGetUserPermissionsQuery ,useEditUserPermissionsMutation } = UserDetailsSlice;
