import { apiSlice } from "../../../apiSlice";

const UserSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: ({ option, centerId, role, selectedCenterId }) => {
        const id = role === "superAdmin" ? selectedCenterId : centerId;
        console.log("getUser");
        return {
          url: `/getCenterUsersByRole/${id}/${option}`,
          method: "GET",
        };
      },
    }),
    getMedicalCenter: builder.query({
      query: () => {
        console.log("getMedicalCenter");
        return {
          url: `/getAllCenters`,
          method: "GET",
        };
      },
    }),

    getUserInvites: builder.query({
      query: ({ id }) => {
        return {
          url: `/getCode/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetMedicalCenterQuery,
  useGetUserInvitesQuery,
} = UserSlice;
