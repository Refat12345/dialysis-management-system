import { apiSlice } from "../../../apiSlice";


const UserSlice = apiSlice.injectEndpoints({
  
  endpoints: (builder) => ({
    getUser: builder.query({
      
      query: ({ option, centerId }) => {
        console.log("id is ",centerId)
        console.log("role",option)

        return {
          url: `/getCenterUsersByRole/${centerId}/${option}`,
          method: "GET",
        }
       
      },
    }),
  }),
});

export const { useGetUserQuery } = UserSlice;
