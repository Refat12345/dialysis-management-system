import { apiSlice } from "../../../apiSlice";



const UserSlice = apiSlice.injectEndpoints({

  endpoints: (builder) => ({
    getUser: builder.query({
      
      query: ({ option, centerId,role,selectedCenterId }) => {
        const id = role === 'superAdmin' ? selectedCenterId : centerId;


        return {
          url: `/getCenterUsersByRole/${id}/${option}`,
          method: "GET",
        }
       
      },
    }),
    getMedicalCenter: builder.query({
      query: () => {
        return {
          url: `/getAllCenters`,
          method: "GET",
        }
       
      },
    }),

    getUserInvites: builder.query({
      query: ({id,role}) => {
        const idd = role === 'superAdmin' ? 0 : id;
        return {
          url: `/getCode/${idd}`,
          method: "GET",
        }
       
      },
    }),
  }),
});

export const { useGetUserQuery,useGetMedicalCenterQuery,useGetUserInvitesQuery } = UserSlice;
