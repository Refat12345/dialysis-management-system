import { apiSlice } from "../../../apiSlice";
import Cookies from "js-cookie"
const UserSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: ({ option, centerId, role, selectedCenterId }) => {
        const id = role === "superAdmin" ? selectedCenterId : centerId;

        return {
          url: `/getCenterUsersByRole/${id}/${option}`,
          method: "GET",
          headers: {"Authorization" : `Bearer ${Cookies.get("token")} `}
        };
        
      },
    }),
    getMedicalCenter: builder.query({
      query: () => {
        return {
          url: `/getAllCenters`,
          method: "GET",
          headers: {"Authorization" : `Bearer ${Cookies.get("token")} `}
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
