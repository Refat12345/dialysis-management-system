import { apiSlice } from "../../../apiSlice";
import Cookies from "js-cookie"
export const generalDetailsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGeneralDetails: builder.query({
      query: (id) => {
        return {
        url: `user/${id}`,
        method: "GET",
        headers:{'Authorization': `Bearer ${Cookies.get("token")}`},
      }
    },
    }),
  }),
});

export const { useGetGeneralDetailsQuery } = generalDetailsApiSlice;
